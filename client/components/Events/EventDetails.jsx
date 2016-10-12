import React, { Component } from 'react';
import QRCodeLib from 'qrcode';
import { browserHistory } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router';
import Moment from 'moment';
import SearchEventsContainer from '../../containers/SearchEventsContainer.js';

export default class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.buyTicket = this.buyTicket.bind(this);
  }

  buyTicket(e) {
    e.preventDefault();
    const id = this.props.location.query.id;
    const name = this.props.username;
    const account = web3.eth.coinbase;
    const contractAddress = this.props.location.query.eventContractAddress;
    const price = this.props.location.query.price;
    const abi = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"attendeesPaid","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eventEndDateTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eventStartDateTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"organizer","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"zipPostalCode","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eventName","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"destroy","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"addressLine2","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"addressLine1","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"numAttendees","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"price","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attendee","type":"address"}],"name":"verifyAttendee","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getNumAttendees","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"quota","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"country","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"eventCreateDateTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"image","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"buyTicket","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"city","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"_organizer","type":"address"},{"name":"_eventName","type":"string"},{"name":"_price","type":"uint256"},{"name":"_quota","type":"uint256"},{"name":"_eventCreateDateTime","type":"uint256"},{"name":"_eventStartDateTime","type":"uint256"},{"name":"_eventEndDateTime","type":"uint256"},{"name":"_description","type":"string"},{"name":"_addressLine1","type":"string"},{"name":"_addressLine2","type":"string"},{"name":"_city","type":"string"},{"name":"_state","type":"string"},{"name":"_zipPostalCode","type":"string"},{"name":"_country","type":"string"},{"name":"_image","type":"string"}],"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_numAttendees","type":"uint256"}],"name":"PurchaseTicket","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"RefundTicket","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amountSent","type":"uint256"},{"indexed":false,"name":"_price","type":"uint256"}],"name":"InsufficientEther","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_organizer","type":"address"},{"indexed":false,"name":"_numAttendees","type":"uint256"},{"indexed":false,"name":"_quota","type":"uint256"},{"indexed":false,"name":"_price","type":"uint256"},{"indexed":false,"name":"_eventName","type":"string"},{"indexed":false,"name":"_eventCreateDateTime","type":"uint256"},{"indexed":false,"name":"_eventStartDateTime","type":"uint256"},{"indexed":false,"name":"_eventEndDateTime","type":"uint256"},{"indexed":false,"name":"_description","type":"string"}],"name":"CreateEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_numAttendees","type":"uint256"},{"indexed":false,"name":"_quota","type":"uint256"}],"name":"ExceedQuota","type":"event"}]
    const contract = web3.eth.contract(abi).at(contractAddress);

    contract.buyTicket.sendTransaction(name, {from: account, value: price}, function (err, result) {
      if (!err) {
        console.log('Buy Ticket Success: ', result);
        return axios.post('/db/addEventToUser', {
            username: name,
            eventID: id,
            address: account,
          })
          .then(function (response) {
            console.log(response, 'success in db user post');
            browserHistory.push('/tickets');
          })
          .catch(function (error) {
            console.log(error, 'error in db user post');
          });
      } else {
        console.dir('Buy Ticket Error: ', arguments);
      }
    });
  }


  render() {
    const query = this.props.location.query;
    return (
      <div className="content__container">
        <h4>Event Name: {query.eventName}</h4>
        <p>Description: {query.description}</p>
        <p>Price: {query.price / 1000000000000000000} ETH</p>
        <p>Start Date: {Moment(query.eventStartDateTime).format('MMM Do YYYY, h:mm A')}</p>
        <p>End Date: {Moment(query.eventStartDateTime).format('MMM Do YYYY, h:mm A')}</p>
        <hr/>
        <p>Street Address: {query.addressLine1}</p>
        <p>Address Line 2: {query.addressLine2}</p>
        <p>City: {query.city}</p>
        <p>State: {query.state}</p>
        <p>Zip/Postal Code: {query.zipPostalCode}</p>
        <p>Country: {query.country}</p>
        <hr/>
        <p>Contract Address: {query.eventContractAddress}</p>
        <p>ID: {query.id}</p>

        <form ref="commentForm" className="comment-form" onSubmit={this.buyTicket.bind(this)}>
          <h1>Buy Ticket</h1>
          <hr />
          <h2>Buy With Meta Mask</h2>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

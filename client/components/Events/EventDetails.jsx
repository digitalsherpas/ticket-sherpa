import React, { Component } from 'react';
import QRCodeLib from 'qrcode';
import { browserHistory } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router';
import Moment from 'moment';
import Modal from 'react-modal';

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
        return axios.post('/db/addEventToUser', {
            username: name,
            eventID: id,
            address: account,
          })
          .then(function (response) {
            browserHistory.push('/tickets');
          })
          .catch(function (error) {
          });
      } else {
      }
    });
  }

  requestCloseFn() {
    browserHistory.push('/');
  }

  render() {
    let metaMaskNotInstalled = true;
    if (typeof web3 !== 'undefined') {
      metaMaskNotInstalled = false;
    }
    const customModalStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };
    const query = this.props.location.query;
    return (
      <div className="content__container">
        <Modal
          isOpen={metaMaskNotInstalled}
          // onAfterOpen={afterOpenFn}
          onRequestClose={this.requestCloseFn.bind(this)}
          // closeTimeoutMS={n}
          style={customModalStyle}>
          <h3>Ticket Sherpa runs on the decentralized Ethereum network using Smart Contracts.</h3>
          <h4>In order to purchase tickets or create events, you need to:</h4>
          <a href="https://metamask.io"><img width="200px" src='http://i.imgur.com/t8is7Ud.png' /></a>
        </Modal>
        <div className="ticket__container">
          <div className="ticket__header">
            <img className="ticket__header-left" height="50%" width="50%" src={query.image} />
            <div className="ticket__header-right">
              <div className="ticket__header-name">{query.eventName}</div>

              <div className="ticket__description">
                <div className="ticket__header-title">Description</div>
                <div>{query.description}</div>
              </div>

              <div className="ticket__date-time">
                <div className="ticket__header-title">Time</div>
                <div className="ticket__header-start">
                  Start: {Moment(isNaN(Number(query.eventStartDateTime)) ? query.eventStartDateTime : Number(query.eventStartDateTime)).format('MMM Do YYYY, h:mm A')}
                </div>
                <div className="ticket__header-end">
                  End: {Moment(isNaN(Number(query.eventEndDateTime)) ? query.eventEndDateTime : Number(query.eventEndDateTime)).format('MMM Do YYYY, h:mm A')}
                </div>
              </div>

              <div className="ticket__header-location">
                <div className="ticket__header-title">Location</div>
                <div>{query.addressLine1}</div>
                <div>{query.addressLine2}</div>
                <div>{query.city}, {query.state}, {query.zipPostalCode}</div>
                <div> {query.country}</div>
              </div>
              <div className="ticket__buy-ticket  ">
                <form ref="commentForm" className="comment-form" onSubmit={this.buyTicket.bind(this)}>
                  <div className="ticket__header-title">Price</div>
                  <div>{query.price / 1000000000000000000} ETH</div>
                  <button className="nav__home-search-submit-btn">Buy Ticket</button>
                </form>
              </div>
          </div>
          </div>

        </div>


      </div>
    );
  }
}

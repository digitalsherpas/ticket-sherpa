import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index.jsx';
import HostMarketplace from '../components/Host/HostMarketplace.jsx';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const HostMarketplaceContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HostMarketplace);

export default HostMarketplaceContainer;

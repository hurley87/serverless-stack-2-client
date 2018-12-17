import React, { Component } from "react";
import { API } from "aws-amplify";
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Settings.css";

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  billUser(details) {
    return API.post("notes", "/billing", {
      body: details
    });
  }

	handleFormSubmit = async (storage, { token, error }) => {
	  if (error) {
	    alert(error);
	    return;
	  }

	  this.setState({ isLoading: true });

	  try {
	    await this.billUser({
	      storage,
	      source: token.id
	    });

	    alert("Your card has been charged successfully!");
	    this.props.history.push("/");
	  } catch (e) {
	    alert(e);
	    this.setState({ isLoading: false });
	  }
	}

	render() {
	  return (
	    <div className="Settings">

{
	      // <StripeProvider apiKey={config.STRIPE_KEY}>
	      //   <Elements>
	      //     <BillingForm
	      //       loading={this.state.isLoading}
	      //       onSubmit={this.handleFormSubmit}
	      //     />
	      //   </Elements>
	      // </StripeProvider>

}
		    <div><img alt="image1" src="https://s3.amazonaws.com/notes-app-client99/1.png" /></div>
		    <div><img alt="image2" src="https://s3.amazonaws.com/notes-app-client99/2.png" /></div>
		    <div><img alt="image3" src="https://s3.amazonaws.com/notes-app-client99/3.png" /></div>
		    <div><img alt="image4" src="https://s3.amazonaws.com/notes-app-client99/4.png" /></div>
		    <div><img alt="image5" src="https://s3.amazonaws.com/notes-app-client99/5.png" /></div>
		    <div><img alt="image6" src="https://s3.amazonaws.com/notes-app-client99/6.png" /></div>
	    </div>
	  );
	}
}
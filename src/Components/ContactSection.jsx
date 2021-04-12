import React, { Component } from 'react';
import { motion } from 'framer-motion';

import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi';
import './styles/contactSection.css';

export default class ContactSection extends Component {
  variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  render() {
    return (
      <div className="contact_container">
        <div className="contact_info">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={this.variants}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.2,
            }}
            className="sub_header"
          >
            Our Contact
          </motion.h3>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={this.variants}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.4,
            }}
          >
            Get In Touch If You Have Any Complaint
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={this.variants}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.4,
            }}
          >
            You can contact us through email, contact form, or phone call.
            Whatever the miss of contact you are willing to use, our customer
            care service agent are available 24/7 to clear any of your doubt.
          </motion.p>
          <ul>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={this.variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.2 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.6,
              }}
            >
              <a href="mailto:support@worldcoincollection.com">
                <FiMail className="icon" />
                support@worldcoincollection.com
              </a>
            </motion.li>
            <motion.li
              initial="hidden"
              animate="visible"
              variants={this.variants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.2 }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                type: 'spring',
                delay: 0.8,
              }}
            >
              <a href="tel:+41 873 643 21">
                <FiPhoneCall className="icon" /> +41 873 643 21
              </a>
            </motion.li>
          </ul>
        </div>
        <div className="contact_form">
          <motion.form
            initial="hidden"
            animate="visible"
            variants={this.variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.2 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              delay: 0.4,
            }}
            action="#"
          >
            <div className="input_group">
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="input_group">
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className="input_group">
              <input type="number" placeholder="Enter your mobile number" />
            </div>
            <div className="input_group">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter message..."
              ></textarea>
            </div>
            <button className="contact_form_btn" type="submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    );
  }
}

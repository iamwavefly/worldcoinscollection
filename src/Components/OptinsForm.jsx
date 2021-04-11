import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { FiKey, FiMapPin } from 'react-icons/fi';
import './styles/optinsform.css';

export default class OptinsForm extends Component {
  variants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  render() {
    return (
      <motion.div
        variants={this.variants}
        initial="hidden"
        animate="visible"
        className="optins_form"
        transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
      >
        <form>
          <FiKey className="optins_icon" />
          <select name="" id="">
            <option disabled selected value="Select an Entity type">
              Select an entity
            </option>
            <option value="">Demo</option>
            <option value="">Demo</option>
            <option value="">Demo</option>
            <option value="">Demo</option>
          </select>
          <FiMapPin className="optins_icon optins_icon2" />
          <input type="text" placeholder="Enter State" readOnly />
          <button type="submit">Get Stated</button>
        </form>
      </motion.div>
    );
  }
}

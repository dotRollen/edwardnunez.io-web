import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedinIn,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import {
  faShareAlt,
  faHeartBroken,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

import './BlogPost.style.scss';
import CommentCard from '../../../common/CommentCard';

import blogPosts from '../blogposts.json';

export default function BlogPost(props) {
  const recaptchaRef = React.createRef();

  const onSubmit = () => {
    const value = recaptchaRef.current.getValue();

    if (value === null) {
      console.log('Captcha value:', value);
    } else if (value) {
      console.log('Captcha value:', value);
    }
  };

  const onChange = value => {
    console.log('Captcha value:', value);
  };

  return (
    <div className="container content">
      <div className="row" style={{ margin: '20px 0px' }}>
        <div className="col-12">
          <h1>
            Blog Title <h4 style={{ opacity: '65%' }}>Sub Title</h4>
          </h1>
        </div>
        <div className="col-12">
          <div className="card-subtitle mb-2 text-muted">Dec 27, 2019</div>
        </div>
        <div className="col-12">
          <img
            className="center-crop"
            src="../assets/img/template/stock-photo-3.jpg"
            alt="Card image cap"
          />
        </div>
        <div className="col-12" style={{ marginTop: '30px' }}>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content. Some quick example text to build on
            the card title and make up the bulk of the card&apos;s content. Some
            quick example text to build on the card title and make up the bulk
            of the card&apos;s content.
          </p>
        </div>
        <div className="col-6">
          <FontAwesomeIcon icon={faHeart} className="social-icon" /> 0{' '}
          <FontAwesomeIcon icon={faHeartBroken} className="social-icon" /> 0{' '}
          <FontAwesomeIcon icon={faBookmark} className="social-icon" />{' '}
        </div>
        <div className="col-6 text-right">
          <a
            className="social-link"
            rel="noopener noreferrer"
            href="#"
            target="_blank"
          >
            <FontAwesomeIcon icon={faShareAlt} className="social-icon" />
          </a>
          <a
            className="social-link"
            rel="noopener noreferrer"
            href="#"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a
            className="social-link"
            rel="noopener noreferrer"
            href="#"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </a>
          <a
            className="social-link"
            rel="noopener noreferrer"
            href="#"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
        </div>
        <div className="col-6">
          <small className="text-muted">Tags </small>
          <a href="#" className="tag">
            #JavaScript
          </a>
        </div>
        <div className="col-12">
          <hr className="divider"></hr>
        </div>
        <div className="col-12">
          <div className="input-group">
            <textarea
              className="form-control"
              aria-label="With textarea"
              style={{ width: '100%', height: '100px' }}
            ></textarea>
          </div>
          <div style={{ marginTop: '5px' }}>
            <button type="button" className="btn btn-dark">
              Comment
            </button>{' '}
            <button
              type="button"
              className="btn btn-outline-dark"
              style={{ border: 'none' }}
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="col-12 row">
          {blogPosts[0].comments.map(comment => (
            <CommentCard key={comment.id} data={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

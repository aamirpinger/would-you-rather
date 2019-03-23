import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props) {
    const { width, height, avatarURL, authorName } = props
    return (
        <div style={{
            flex: 3,
        }}>

            <img
                src={avatarURL}
                alt={authorName}
                style={{
                    width,
                    height,
                    borderRadius: 200,
                    padding: 3,
                    border: '0.15em solid #EABA00',
                }}
            />
        </div>
    )
}

Avatar.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    avatarURL: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
};

export default Avatar
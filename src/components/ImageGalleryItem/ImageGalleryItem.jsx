import PropTypes from 'prop-types';
// import { Component } from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { GalleryItem, ItemImg } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  item: { webformatURL, tags, largeImageURL },
}) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <GalleryItem>
      <ItemImg src={webformatURL} alt={tags} onClick={handleOpenModal} />
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </GalleryItem>
  );
}

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   handleOpenModal = () => {
//     this.setState({ showModal: true });
//   };

//   handleCloseModal = () => {
//     this.setState({ showModal: false });
//   };

//   render() {
//     const {
//       item: { webformatURL, tags, largeImageURL },
//     } = this.props;
//     return (
//       <GalleryItem>
//         <ItemImg src={webformatURL} alt={tags} onClick={this.handleOpenModal} />
//         {this.state.showModal && (
//           <Modal onClose={this.handleCloseModal}>
//             <img src={largeImageURL} alt={tags}></img>
//           </Modal>
//         )}
//       </GalleryItem>
//     );
//   }
// }

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

import { useS3 } from '../api/s3Hooks';
import { useState } from 'react';
import config from "../environment/Config";

const ProfileImageUpload = (props) => {
  const [bannerImageUrl, setBannerUrl] = useState('/pictures/Camera-alt.png');
  const [profileImageUrl, setProfileUrl] = useState('/pictures/Camera-alt.png');
  const { uploadObject } = useS3();

  const handleImageChange = (event, type) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const fileName = imageFile.name; //Get the file name
      const fileExtension = fileName.split('.').pop(); //Get the file name extension
      const reader = new FileReader(); // Read the file
      reader.onload = async () => {
        const bucket = config.s3_bucket; // Bucket name is going to be Urapolku
        const userId = localStorage.getItem('userId'); // Fetch the user ID from localstorage
        const folderAndFile = `${type}s/${userId}.` + fileExtension; // Store the file inside the profile-pictures/userid.ext where ext is the uploaded file extension
        if ((await uploadObject(bucket, folderAndFile, reader.result, 'public-read')) === 200) {
          const uploadedImagePath =
            config.s3_full_endpoint + `${type}s/${userId}.` + fileExtension;
          if (type === 'profile-banner') {
            setBannerUrl(uploadedImagePath); // Reference the file in the profile pic url
            props.onChange(type, uploadedImagePath); //sync the changed image to the component
            localStorage.setItem('bannerImage', uploadedImagePath);
          } else if (type === 'profile-picture') {
            setProfileUrl(uploadedImagePath);
            props.onChange(type, uploadedImagePath);
            localStorage.setItem('profileImage', uploadedImagePath);
          }
        }
      };
      reader.readAsArrayBuffer(imageFile);
    }
  };

  const openFileSelector = (ev) => {
    // Trigger the hidden input file when the button is clicked
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = (e) => handleImageChange(e, ev.target.id);
  };

  const styles = {
    profileImageBanner: {
      backgroundColor: '#F0F0F0',
      height: '10rem',
      borderRadius: '.5rem',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
    },
    picture: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    profileImageProfilePicture: {
      backgroundColor: '#D9D9D9',
      borderRadius: '100%',
      outline: '.1rem solid #4A4A4A',
      translate: '2rem -3.5rem',
      position: 'absolute',
      overflow: 'hidden',
      height: '8rem',
      width: '8rem',
      display: 'grid',
      placeItems: 'center',
    },
    profileImageText: {
      fontWeight: '200',
      marginBottom: '.5rem',
    },
    wrapper: {
      marginBottom: '4rem',
    },
  };

  return (
      <div style={styles.wrapper}>
        <h3 style={styles.profileImageText}>Upload your photos</h3>
        <div>
          <div
              id="profile-banner"
              onClick={openFileSelector}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openFileSelector();
                }
              }}
              role="button"
              tabIndex="0"
              style={styles.profileImageBanner}
          >
            <img
                style={
                  bannerImageUrl !== '/pictures/Camera-alt.png'
                      ? styles.picture
                      : { pointerEvents: 'none' }
                }
                src={bannerImageUrl}
                alt="Banner"
            />
          </div>

          <div
              style={styles.profileImageProfilePicture}
              id="profile-picture"
              onClick={openFileSelector}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openFileSelector();
                }
              }}
              role="button"
              tabIndex="0"
          >
            <img
                style={
                  profileImageUrl !== '/pictures/Camera-alt.png'
                      ? styles.picture
                      : { pointerEvents: 'none' }
                }
                src={profileImageUrl}
                alt="Profile"
            />
          </div>
        </div>
      </div>
  );
};

export default ProfileImageUpload;

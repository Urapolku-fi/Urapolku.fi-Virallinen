const ProfileImageUpload = () => {
  const styles = {
    profileImageBanner: {
      backgroundColor: "#F0F0F0",
      height: "10rem",
      borderRadius: ".5rem",
      display: "grid",
      placeItems: "center",
    },
    profileImageProfilePicture: {
      backgroundColor: "#D9D9D9",
      padding: "2rem",
      borderRadius: "100%",
      outline: ".1rem solid #4A4A4A",
      translate: "2rem -3.5rem",
    },
    profileImageText: {
      fontWeight: "200",
      marginBottom: ".5rem",
    },
  };

  return (
    <div>
      <h3 style={styles.profileImageText}>Upload your photos</h3>
      <div>
        <div style={styles.profileImageBanner}>
          <img src="/pictures/Camera-alt.png" />
        </div>
        <img
          style={styles.profileImageProfilePicture}
          src="/pictures/Camera-alt.png"
        />
      </div>
    </div>
  );
};

export default ProfileImageUpload;

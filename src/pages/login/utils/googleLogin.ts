const googleLogin = () => {
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_APP_GOOGLE_AUTH_REDIRECT_URI}&response_type=code&scope=email`;
};

export default googleLogin;

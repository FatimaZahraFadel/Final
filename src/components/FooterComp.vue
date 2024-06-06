<template>
  <div class="app-footer">
    <nav>
      <ul>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/mentions-legales">Mentions Légales</router-link></li>
      </ul>
    </nav>
    <div class="social-media">
      <a href="https://facebook.com" target="_blank">Facebook</a>
      <a href="https://twitter.com" target="_blank">Twitter</a>
      <a href="https://instagram.com" target="_blank">Instagram</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style scoped>
.app-footer {
  background-color: #e7dbdb; /* Dark background color */
  color: #fff; /* White text color */
  padding: 20px;
}

nav ul {
  list-style-type: none;
  display: flex;
}

nav ul li {
  margin-right: 20px; /* Add spacing between navigation items */
}

.social-media {
  margin-top: 10px;
}

.social-media a {
  color: #fff; /* White text color for social media links */
  margin-right: 10px; /* Add spacing between social media links */
  text-decoration: none;
}

.social-media a:hover {
  text-decoration: underline; /* Underline social media links on hover */
}
</style>

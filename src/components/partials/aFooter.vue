<template>
  <div class="div--footer">
    <footer class="footer">
      <div class="container">
        <span class="text-muted">Arga Ghulam Ahmad © 2018</span>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "aFooter"
  }
</script>

<style scoped>
  .footer {
    position: fixed;
    text-align: center;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px; /* Set the fixed height of the footer here */
    line-height: 60px; /* Vertically center the text there */
    background-color: #f5f5f5;
    z-index: 10000;
    font-size: smaller;
    font-weight: 600;
  }
</style>

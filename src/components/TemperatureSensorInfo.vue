<script>
export default {};
</script>

<template>
  <div>
    <p>{{ this.$store.state.smartDevices[2].name }}</p>
    <p>{{ this.$store.state.smartDevices[2].connectionState }}</p>
    <p>{{ this.$store.state.smartDevices[2].temperature }}</p>
  </div>
</template>

<style></style>

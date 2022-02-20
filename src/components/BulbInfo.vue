<script>
export default {};
</script>

<template>
  <div>
    <p>{{ this.$store.state.smartDevices[0].name }}</p>
    <p>{{ this.$store.state.smartDevices[0].connectionState }}</p>
    <p>{{ this.$store.state.smartDevices[0].isTurnedOn }}</p>
    <p>{{ this.$store.state.smartDevices[0].brightness }}</p>
    <p>{{ this.$store.state.smartDevices[0].color }}</p>
  </div>
</template>

<style></style>

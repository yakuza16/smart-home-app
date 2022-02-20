<script>
export default {};
</script>

<template>
  <div>
    <p>{{ this.$store.state.smartDevices[1].name }}</p>
    <p>{{ this.$store.state.smartDevices[1].connectionState }}</p>
    <p>{{ this.$store.state.smartDevices[1].isTurnedOn }}</p>
    <p>{{ this.$store.state.smartDevices[1].powerConsumption }}</p>
  </div>
</template>

<style></style>

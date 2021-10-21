<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white" href=" ">
      <img
        src="@/assets/logo.png"
        alt="vue_logo"
        class="d-inline-block align-text-top mx-2"
        height="24"
      />
      DayBook
    </a>

    <div class="d-flex">
      <button class="btn btn-outline-info" style="margin: 0 8px">
        <i class="fa fa-sign-out-alt" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "DayBookNavBar",
};
</script>

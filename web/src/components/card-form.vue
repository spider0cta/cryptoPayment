<template>
<form class="form">
  <div class="field">
    <label class="label">Card Number</label>
    <div class="control">
      <input class="input"
      type="text" placeholder="Card Number">
    </div>
  </div>
  <div class="field is-horizontal">
    <div class="field-body">
    <div class="field">
      <label class="label"> Expiry Date</label>
      <div class="control is-expanded">
        <input class="input"
        type="text" placeholder="Expiry Date">
      </div>
    </div>
    <div class="field">
      <label class="label">Security Code</label>
      <div class="control is-expanded">
        <input class="input"
        type="text" placeholder="Security Code">
      </div>
    </div>
  </div>
  </div>
  <div class="button is-info">
    Purchase
  </div>
</form>
</template>

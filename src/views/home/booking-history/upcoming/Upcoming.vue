<template>
  <div class="upcoming">
    <div class="book-info p-24 mv-24" v-for="i in [1, 2, 3]" :key="i">
      <div class="flex flex-h-between flex-wrap border-bottom-1 lh-lg">
        <div class="fw-bold font-size-16">Interior Lightning Service</div>
        <div class="service-desc font-size-12">
          Service description
          <i class="bi-chevron-right"></i>
        </div>
      </div>
      <div
        class="
          flex
          basic-info
          text-gray
          flex-v-stretch
          pt-3
          pb-3
          border-bottom-3
        "
      >
        <div class="col-8 col-xs-12 pr-12">
          <div class="flex mb-2">
            <div>
              <div>Contact Name</div>
              <div class="text-gray-600">Tom Brace</div>
            </div>
            <div class="col-push-2">
              <div>Contact Number</div>
              <div class="text-gray-600">0488 888 888</div>
            </div>
          </div>
          <div class="mb-2">
            <div class="text">Service Address</div>
            <div class="text-gray-600">12 West St, Canley Vale, NSW 2166</div>
          </div>
          <div>
            <div>Service Time</div>
            <div class="text-gray-600">Morning 8AM-11AM, 11 December 2021</div>
          </div>
        </div>
        <div class="col-4 col-xs-12 flex-col flex-h-between refund">
          <div class="text-orange">Full Refund</div>
          <div>
            Amount Paid
            <i class="bi-question-circle-fill font-size-12"></i>
            <div class="font-size-20">
              <span>$50</span>
            </div>
          </div>
          <div>
            Refunded
            <i class="bi-question-circle-fill font-size-12"></i>
            <div class="font-size-20">
              <span>$50</span>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right text-gray-600">Booking canceled</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Upcoming',
}
</script>

<style lang="scss" scoped>
.book-info {
  border-radius: 4px;
  box-shadow: 0 0 $default_margin rgba(#000, 0.2);

  .service-desc {
    color: $orange;
    cursor: pointer;
  }

  .basic-info {
  }

  .refund {
    border-left: 2px solid $orange-300;
    padding-left: 2.5rem;
  }

  i.bi-question-circle-fill {
    cursor: pointer;
  }
}
</style>

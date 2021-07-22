<template>
  <div class="upcoming">
    <div class="book-info p-24 mb-24" v-for="i in [1, 2, 3]" :key="i">
      <div class="flex flex-h-between flex-wrap border-bottom-1 lh-lg">
        <div class="fw-bold font-size-16 pr-8">Interior Lightning Service</div>
        <div class="service-desc font-size-12">
          Service description
          <i class="bi-chevron-right"></i>
        </div>
      </div>
      <div class="container p-0 border-bottom-3">
        <div class="basic-info text-gray pt-3 pb-3 row">
          <div class="col-sm-8 pr-12">
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
            <div class="mb-2">
              <div>Service Time</div>
              <div class="text-gray-600">
                Morning 8AM-11AM, 11 December 2021
              </div>
            </div>
          </div>
          <div class="col-sm-4 flex-col flex-h-between refund">
            <div class="text-orange">Full Refund</div>
            <div class="paid">
              Amount Paid
              <i class="bi-question-circle-fill font-size-12"></i>
              <div class="font-size-20">
                <span class="text-gray-600">$50</span>
              </div>
            </div>
            <div class="refund-val">
              Refunded
              <i class="bi-question-circle-fill font-size-12"></i>
              <div class="font-size-20">
                <span class="text-gray-600">$50</span>
              </div>
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
@media screen and (max-width: $screen_sm) {
  .book-info {
    .refund {
      padding-top: .5rem;
      padding-left: calc(var(--bs-gutter-x) * .5);
      border-left: none;
      border-top: 1px solid $gray-300;
      display: block;
      .paid, .refund-val {
        display: inline-block;
      }
      .refund-val {
        margin-left: 1/6 * 100%;
      }
    }
  }
}
</style>

import MyProfile from '@/views/home/my-profile/MyProfile'
import Home from '@/views/home/Home.vue'
import BookingHistory from '@/views/home/booking-history/BookingHistory'
import Upcoming from '@/views/home/booking-history/upcoming/Upcoming'

export default {
  path: '/home',
  name: 'Home',
  component: Home,
  children: [
    {
      path: '',
      redirect: 'myprofile',
    },
    {
      path: 'myprofile',
      name: 'MyProfile',
      component: MyProfile,
      meta: {
        name: 'My Profile',
      },
    },
    {
      path: 'addressbook',
      name: 'AddressBook',
      component: MyProfile,
      meta: {
        name: 'Address Book',
      },
    },
    {
      path: 'bookinghistory',
      name: 'BookingHistory',
      component: BookingHistory,
      children: [
        {
          path: 'upcoming',
          component: Upcoming,
          name: 'Upcoming',
          meta: {
            name: 'Upcoming',
          },
        },
        {
          path: 'completed',
          name: 'Completed',
          component: Upcoming,
          meta: {
            name: 'Completed',
          },
        },{
          path: 'canceled',
          name: 'Canceled',
          component: Upcoming,
          meta: {
            name: 'Canceled',
          },
        },
      ],
      meta: {
        name: 'Booking History',
      },
    },
    {
      path: 'paymentsdetails',
      name: 'PaymentsDetails',
      component: MyProfile,
      meta: {
        name: 'Payments Details',
      },
    },
    {
      path: 'updatepassword',
      name: 'UpdatePassword',
      component: MyProfile,
      meta: {
        name: 'Update Password',
      },
    },
    {
      path: 'logout',
      name: 'Logout',
      component: MyProfile,
      meta: {
        name: 'Log out',
      },
    },
  ],
}

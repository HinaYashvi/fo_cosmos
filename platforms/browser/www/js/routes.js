var routes = [
  // Index page
  {
    //path: '/index/',
    path: '/',
    url: './index.html',
    name: 'index',
  },
  {
    path: '/dashboard/',
    url: './dashboard.html',
  },
  {
    path: '/pro_registrations/',
    url: './pro_registrations.html'
  },
  {
    path: '/provisional_registration/',
    url: './provisional_registration.html',
  },
  {
    path: '/dpo_data/',
    url: './dpo_data.html',
  }, 
  {
    path: '/dpo_details/',
    url: './dpo_details.html',
  },
  {
    path: '/newbusiness_dev/',
    url: './newbusiness_dev.html',
  }, 
  {
    path: '/dpo_detail_view/',
    url: './dpo_detail_view.html',
  }, 
  {
    path: '/add_devlopment/',
    url: './add_devlopment.html',
  },
  {
    path: '/add_competitior/',
    url: './add_competitior.html',
  }, 
  {
    path: '/business_details/',
    url: './business_details.html',
  },  
  {
    path: '/editBusiness/',
    url: './editBusiness.html',
  },
  {
    path: '/feedback/',
    url: './feedback.html',
  },
  {
    path: '/add_feedback/',
    url: './add_feedback.html',
  },
  {
    path: '/field_visit/',
    url: './field_visit.html',
  },        
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './404.html',
  },
];

import Swal, { SweetAlertOptions } from 'sweetalert2';

export const environment = {
  timeBeforAutoReload: 2000,
  autoReloadInterval: 30000,
  production: false
  , baseURL: 'https://toeic.gogitek.online/api'
  // , baseURL2: 'http://localhost:4200/solr/collection_alias/select'
  , swal: {
    delete: <SweetAlertOptions>{
      title: 'Are you sure?',
      text: 'Do you want to delete?',
      icon: 'warning',
      showDenyButton: true, // hiện button "No"
      denyButtonColor: '#00CCD6',
      confirmButtonText: 'Yes, delete it!'
    }, deleteOk: <SweetAlertOptions>{
      title: 'Deleted!',
      icon: 'success',
      timer: 1500
    }, createOk: <SweetAlertOptions>{
      title: 'Created!',
      icon: 'success',
      timer: 1500
    }, createFail: <SweetAlertOptions>{
      title: 'Create Fail!',
      icon: 'error',
    }, editOk: <SweetAlertOptions>{
      title: 'Edited!',
      icon: 'success',
      timer: 1500
    }, error: <SweetAlertOptions>{
      title: 'Error!',
      icon: 'error'
    }, loading: <SweetAlertOptions>{
      title: 'Loading!',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading(Swal.getDenyButton());
      }
    }, unauthorized: <SweetAlertOptions>{
      title: 'Unauthorized',
      text: '',
      icon: 'error',
      denyButtonColor: '#00CCD6'
    }
  }
};

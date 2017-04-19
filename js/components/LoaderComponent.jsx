import React from 'react';
import '../../sass/loader.scss';

export default class LoaderComponent extends React.Component {

  render() {
    return <div className='loader'>
      <img src='http://www.sauvageny.com/sites/all/themes/sauvage/imgs/loading.gif' alt='loader-gif-image'/>
    </div>
  }
}

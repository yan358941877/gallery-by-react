require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

// 获取图片相关的数据
let imageDatas = require('../data/imageData.json');
// 利用立即函数表达式，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDataArr) {
	for (let i = 0, j = imageDataArr.length; i < j;i++){
		let singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/'+singleImageData.fileName);
    imageDataArr[i]=singleImageData;
	}

  return imageDataArr;
})(imageDatas);



class AppComponent extends React.Component {
	render() {
		return (
      <section className="stage">
          <section className="img-set"></section>
          <nav className="controller-nav"></nav>
      </section>
		);
	}
}

AppComponent.defaultProps = {
};

export default AppComponent;
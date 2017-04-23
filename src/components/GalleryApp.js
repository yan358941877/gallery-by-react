require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

// 获取图片相关的数据
let imageDatas = require('../data/imageData.json');
// 利用立即函数表达式，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDataArr) {
	for (let i = 0, j = imageDataArr.length; i < j; i++) {
		let singleImageData = imageDataArr[i];
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
})(imageDatas);


class ImgFigure extends React.Component {
	render() {
		return (
			<figure className="img-figure">
				<img src={this.props.data.imageURL} alt={this.props.data.title} />
				<figcaption>
					<h2 className="img-title">{this.props.data.title}</h2>
				</figcaption>
			</figure>
		)
	}
}

class GalleryApp extends React.Component {
	render() {
		let controllerUnits = [],
			imgFigures = [];

		imageDatas.forEach(function(value,index){
			imgFigures.push(<ImgFigure data={value}/>);
		});
		return (
			<section className="stage">
				<section className="img-set">
          {imgFigures}
        </section>
				<nav className="controller-nav"></nav>
			</section>
		);
	}
}



export default GalleryApp;

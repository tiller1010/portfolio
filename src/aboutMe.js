import React, { Component } from 'react';

const bookSeperatorStlye={
  textDecoration:'underline',
  textAlign: 'center',
  width:'90%',
  margin:'100px auto',
  fontFamily:'serif',
  background: 'white',
  letterSpacing: '4px',
  boxShadow:'3px 3px 0 #ddd, 6px 6px 0 #ccc, 9px 9px 0 #bbb, 12px 12px 0 #aaa',
  padding:'10px 0',
  transform:'translateY(50px)'
}

const Book=(props)=>{
  return(
    <div className='window' style={{marginTop: '10px'}}>
      <h3 className={props.side + 'Side'}>
        <img src={props.image} alt={props.alt} style={{float: props.side, height:'200px', width:'160px', margin:'10px'}}/>
        <header>{props.title}</header><hr/>
        <p>{props.description}</p>
      </h3>
    </div>
  )
}

class Description extends Component{
  render(){
    return(
      <div>
        <h3 className='window'>
          <header>Introduction</header><hr/>
          <p>
            Looking for a new web developer that is easy to get along with and is always hungry to learn more? My name is Tyler Trout, and I am a self-taught aspiring web developer. I am looking to achieve my first employment oppritunity.
          </p>
        </h3>
        <h3 className='window rightSide'>
          <header>Experience</header><hr/>
          <p>
            I have over nine months of experience reading excellent coding books, completing challenges provided by various sources, and writing code for my own personal projects. I attend monthly meetups with Coderie and learn from the best!
          </p>
        </h3>
        <h3 className='window leftSide'>
          <header>Skills</header><hr/>
          <p>
            I have skills in HTML, CSS, JavaScript, and more! My framework of choice is React, but I also have the abilities to contain application state in Redux, as well as utilize the tools provided by jQuery. I use several various technologies to assist myself in development. I use Git and GitHub frequently to keep track of changes and upload my work. I use Chrome Dev Tools to inspect the contents of my application and read from the console.
          </p>
        </h3>
        <h3 className='window rightSide'>
          <header>Moving forward</header><hr/>
          <p>
            I love to learn new things and do so every day. As of the beginning of this year, I have learned how to set up my own WordPress sites as well as the basics of developing themes from scratch. Currently, I have been learning some backend technologies such as PHP, SQL, and Node.js. My hope is to one day have the abilities to understand and work on any part of a web application and deliver an exceptional user experience. Coding has always and intrigued and delighted me, and I am excited for what I might create in the future!
          </p>
        </h3>
        <h1 id='bookSeperator' style={bookSeperatorStlye}>Books I have read:</h1>
        <Book side='left' image='https://images-na.ssl-images-amazon.com/images/I/51lu4ArIFYL._SX258_BO1,204,203,200_.jpg' title='JavaScript The Definitive Guide' description='My first coding book, JavaScript The Definitive Guide felt almost like reading a code dictionary. Useful feature or not, this book covers what seems like everything at first. This book breaks down the language itself as well as the tools that can be used on the client side. This was a satisfying book to finish and really opened up my eyes to the scope of the language.'/>
        <Book side='right' image='https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg' title='Learning React' description='React seemed dificult for me to learn at first. I was used to keeping HTML and JS seperated, but now I was supposed to marry the two in JSX? Learning React made React simple to understand and use. The book walks the reader through a few projects, teaching concepts by simply adding new features. React has become my favorite library and is what I used to build this portfolio.'/>
        <Book side='left' image='https://covers.oreillystatic.com/images/9780596517748/lrg.jpg' title='JavaScript: The Good Parts' description='JavaScript: The Good Parts was a brief but dense read. The book covers all the best and worst practices one should use or avoid when using JavaScript. The book is an excellent reference for highlighting the way JavaScript works and the way it should be used.'/>
        <Book side='right' image='https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7872/9781787285705.jpg' title='WordPress Complete' description='This book starts out fairly simple, as one would expect. Creating blog posts and adding plugins and themes are great features of WordPress but not too dificult to understand. However, the book becomes more challenging when it has the reader developing their own themes and plugins with PHP code. WordPress Complete was a pleasure to read, just with an unexpected dificulty spike.'/>
      </div>
    );
  }
}

export default Description;

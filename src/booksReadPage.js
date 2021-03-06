import React, {Component} from 'react';

const bookSeperatorStlye={
  textAlign: 'center',
  width:'100%',
  margin:'100px auto 80px auto',
  fontFamily:'"Francois One", Helvetica, sans-serif',
  background: 'linear-gradient(to bottom, white 80%, #00fdaa44)',
  letterSpacing: '4px',
  padding:'20px 0',
  transform:'translateY(40px)',
  color:'black',
}

const Book=(props)=>{
  return(
    <div className={`window box-container ${props.side}Side`} style={{marginTop: '10px'}}>
      <div>
        <img src={props.image} alt='book' style={{float: props.side, height:'200px', width:'160px', margin:'10px'}}/>
        <header>{props.title}</header>
        <h5 style={{textAlign: props.side, transform: props.side === 'right' ? 'translateX(-39px)' : ''}}>by: {props.author}</h5><hr/>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

class BooksReadPage extends Component{

  componentDidMount(){
    window.scrollTo(0, 0);
    let frames = document.querySelectorAll('.window');
    document.addEventListener('scroll', function(){
      for(let i=0;i<frames.length;i++){
        if(frames[i].getBoundingClientRect().top<385){
          frames[i].style.visibility='visible';
          frames[i].classList.add('animated');
        }
      }
    });
  }

  render(){
    return(
      <div id='BooksReadPage'>
        <h1 id='bookSeperator' style={bookSeperatorStlye}>Books I have read:</h1>
        <Book side='left' image='https://images-na.ssl-images-amazon.com/images/I/51lu4ArIFYL._SX258_BO1,204,203,200_.jpg' title='JavaScript The Definitive Guide' author='David Flanagan'
        description="
          My first coding book, JavaScript The Definitive Guide felt
          almost like reading a code dictionary. Useful feature or not,
          this book covers what seems like everything at first. This
          book breaks down the language itself as well as the tools that can be
          used on the client side. This was a satisfying book to finish and really
          opened up my eyes to the scope of the language.
        "/>
        <Book side='right' image='https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg' title='Learning React' author='Alex Banks & Eve Porcello'
        description="
          React seemed difficult for me to learn at first. I was used to
          keeping HTML and JS seperated, but now I was supposed
          to marry the two in JSX? Learning React made React
          simple to understand and use. The book walks the reader through a
          few projects, teaching concepts by simply adding new features. React
          has become my favorite library and is what I used to build this
          portfolio.
        "/>
        <Book side='left' image='https://covers.oreillystatic.com/images/9780596517748/lrg.jpg' title='JavaScript: The Good Parts' author='Douglas Crockford'
        description="
          JavaScript: The Good Parts was a brief but dense read.
          The book covers all the best and worst practices one
          should use or avoid when using JavaScript. The book is an
          excellent reference for highlighting the way JavaScript works and the
          way it should be used.
        "/>
        <Book side='right' image='https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7872/9781787285705.jpg' title='WordPress Complete' author='Karol Król'
        description="
          This book starts out fairly simple, as one would expect.
          Creating blog posts and adding plugins and themes are
          great features of WordPress but not too difficult to
          understand. However, the book becomes more challenging when it
          has the reader developing their own themes and plugins with PHP
          code. WordPress Complete was a pleasure to read, just with an
          unexpected difficulty spike.
        "/>
        <Book side='left' image='https://prodimage.images-bn.com/pimages/9781840788273_p0_v1_s550x406.jpg' title='PHP & MySQL' author='Mike McGrath'
        description="
          Following along with this book, I found it very straight forward and comprehensive.
          Everything is in simple and easy steps that are annotated with a description of that code's purpose.
          This book walks the reader through core fundamentals of PHP and SQL, and ends with projects such as an app that requires
          users to register or login, a forum, and an ecommerce shopping system. The book is a great introduction to building backend web-apps.
        "/>
        <Book side='right' image='https://covers.oreillystatic.com/images/0636920033868/lrg.jpg' title='Modern PHP' author='Josh Lockhart'
        description="
          Modern PHP covers all of the best practices and tricks of PHP.
          While I was reading this book, I learned about the PHP Standards Recommendation,
          how to manage dependencies with Composer, and even how to build PHP from source.
          There are plenty of things that this book mentioned that caught my interest such as
          Facebook’s “Hack” & HipHopVM, Nginx, and Laravel. This book was a great glimpse into
          the world of backend development with PHP.
        "/>
        <Book side='left' image='https://i.ebayimg.com/images/g/etUAAOSwvjtc1Lyg/s-l300.jpg' title='HTML&CSS' author='Jon Duckett'
        description="
          This book was a very pleasant review of the core front-end languages. 
          Everything is laid out is a very aesthetically pleasing way, complete with photos and illustrations. 
          I was able to pick up a few things I had missed, as well as a few design principles. 
          HTML&CSS is a great introduction or source for review, and I often recommend it as a good starting point.
        "/>
        <Book side='right' image='https://images-na.ssl-images-amazon.com/images/I/41NGBmeH1uL._SX403_BO1,204,203,200_.jpg' title='Learning Node.js Development' author='Andrew Mead'
        description="
        	Learning Node.js Development teaches all of its topics step by step.
        	This project based book covers all of the fundamentals of Node and some popular NPM modules.
        	I learned how to create command line apps, how to make asynchronous requests with promises,
        	and how to deploy and test web apps with Express. Node is great if you are already familiar with JavaScript,
        	and NPM has a seemingly limitless supply of tools to get started building just about anything.
        "/>
      </div>
    );
  }
}

export default BooksReadPage;

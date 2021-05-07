import React, { ReactElement } from 'react'
import moment from 'moment'
import {MainLayout} from './style'
import {Header} from '../../components/Header'

const Banner = ():ReactElement=>{
  return (
    <div style={{
      width: '100%',
      height: '500px',
      backgroundColor: 'gray',
      padding: '250px 10% 0 10%',
    }}
    >
      {/* <img src="/" alt="이미지" srcSet="" /> */}
      <h2 style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: '32px'
      }}
      >
        Hello FrontEnd

      </h2>
      <p style={{
        color: 'white',
        paddingLeft: '10px'
      }}
      >
        React...

      </p>
    </div>
)
}

const Card = ()=>{
  return (
    <div style={{background:'rgba(0,0,0,0.1)', width: '24%', margin: '10px'}}>
      <div className="card-img" style={{ height: "156px", background:'rgba(0,0,0,0.1)'}}>
        <img src="/" alt="이미지" width="100%" height="100%" />
      </div>
      <div className="card-content" style={{padding: '32px'}}>
        <div className="summary-card" style={{height: '188px'}}>
          <h4 style={{
            fontSize:'1.5rem',
            fontWeight:'bold'
          }}
          >
            Title...

          </h4>
          <p style={{
            marginTop:'16px'
          }}
          >
            Description...
          </p>
        </div>
        <div
          className="author"
          style={{
          display: 'flex',
          alignItems:'center'
        }}
        >
          <div style={{
            background:'rgba(0,0,0,0.1)',
            width: '3rem',
            height:'3rem',
            borderRadius:'50%',
            overflow:'hidden'
          }}
          >
            <img src="/" alt="thumbnail" width='100%' height="100%" />
          </div>
          <div style={{
            fontSize: '1.2rem',
            marginLeft: '1rem'
          }}
          >
            id...
          </div>
        </div>
      </div>
    </div>
)
}

// TODO: slick 적용하기
// TODO: grid로 변경하기
const RecommendSection = ():ReactElement=>{
  const cardsData = [0, 0, 0, 0];
  const cardList = cardsData.map(item=><Card key={Math.random()} />)
  return (
    <div style={{width: '90%', margin: '2rem auto'}}>
      <h3 style={{fontSize:'1.5rem', fontWeight: 'bold'}}>추천 Post</h3>
      <div style={{
        display:'flex'
      }}
      >
        {cardList}
      </div>
    </div>
)
}

// 

const Post = ():ReactElement=>{
  return (
    <div style={{margin: '1rem', background:'rgba(0,0,0,0.1)'}}>
      {/* title */}
      <h3 className="title">Title...</h3>
      <div className="date">{moment().format('yyyy.MM.DD')}</div>
      <p className="description">
        description...
      </p>

      {/* img */}
      <div className="img">
        <img src="/" alt="" width="100%" height="333px" />
      </div>

      {/* tags */}
      <div className="tags">
        tags...
      </div>

      {/* author */}
      <div className="author" style={{display:'flex'}}>
        <div
          className="author-thumbnail"
          style={{
            background:'rgba(0,0,0,0.1)',
            width: '3rem',
            height:'3rem',
            borderRadius:'50%',
            overflow:'hidden'
          }}
        >
          <img src="/" alt="thumbnail" width='100%' height="100%" />
        </div>
        <div className="author-text" style={{marginLeft: '1rem'}}>
          {/* id */}
          <div
            className="author-id"
            style={{
            fontSize: '1.2rem',
          }}
          >
            id...
          </div>
          <div className="author-introduce">
            introduce...
          </div>
        </div>

      </div>
    </div>
)
}
const Posts = ():ReactElement=>{
  const postsData = [0, 0, 0, 0];
  const postList = postsData.map(item=><Post key={Math.random()} />)
  return(
    <div style={{flex: 'auto', background:'rgba(0,0,0,0.1)', marginRight:'1rem'}}>
      {postList}
    </div>
)
}

const Tag = ():ReactElement=>{
  return (
    <div
      className='tag'
      style={{
        margin: '0.5rem',
        padding: '0.5rem',
        backgroundColor:'white',
        borderRadius:'8px'
      }}
    >
      {`tag${  Math.round(Math.random()*10)}`}
    </div>
)
}

const Tags = ():ReactElement=>{
  const tagsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ]
  const list = tagsData.map(()=><Tag key={Math.random()} />)
  return (
    <div style={{margin: '0.5rem', padding:'0.5rem', background:'rgba(0,0,0,0.1)', display:'flex', flexWrap: 'wrap'}}>
      {list}
    </div>
)
}


const Aside = ():ReactElement=>{
  const tagGroupData = [0, 0];
  const list = tagGroupData.map((item)=> (
    <div key={Math.random()}>
      <h3 className="title" style={{marginTop: '2rem'}}>
        Title...
      </h3>
      <Tags  />
    </div>
)
  )
  return (
    <div style={{width: '400px', background:'rgba(0,0,0,0.1)'}}>{list}</div>
)
}


const PostSection = ():ReactElement=>{
  return (
    <div style={{width: '90%', margin: '2rem auto'}}>
      <h3 style={{fontSize:'1.5rem', fontWeight: 'bold'}}>Recent Post</h3>
      <div style={{display:'flex', margin: '10px' }}>
        <Posts />
        <Aside />
      </div>
    </div>
)
}

const Footer = ():ReactElement=>{
  return <div>this is footer</div>
}

export const MainPage = ():ReactElement=>{
    return (
      <MainLayout>
        <Header />
        <Banner />
        <RecommendSection />
        <PostSection />
      </MainLayout>
    )
}
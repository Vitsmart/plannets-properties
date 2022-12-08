import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="topbar">
          <div className="categories">
            <span>Rent</span>
            <span>Buy</span>
            <span>Build</span>
            <span>Furnish</span>
          </div>
          <div className="wrapper">
            <div className="title">Find the perfect match</div>
          <div className="searchContainer">
            <input type="text" placeholder="Search"/>
            <input type="text" placeholder="Search"/>
            <input type="radio" />
            <input type="text" placeholder="Search"/>
            <input type="text" placeholder="Search"/>
            
          </div>
          <div className="btn">
            <button>Search</button>
            </div>
            </div>
        </div>










      <div className="card bg1">
        <div className="title">BUY/SALE PROPERTY</div>
        <div className="title1">find, buy, sale a property</div>
        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae 
        ratione cum unde sed quisquam tempore vero blanditiis!</div>
        <button>Explore</button>
      </div>
      <div className="card bg2">
        <div className="title">Rent/lease property</div>
        <div className="title1">find, buy, sale a property</div>
        <div className="desc"> Explore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae 
        Aliquid autem dignissimos quae facere ratione!</div>
        <button>Explore</button>
      </div>
      <div className="card bg3">
        <div className="title">design and construct</div>
        <div className="title1">find, buy, sale a property</div>
        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Aliquid autem dignissimos quae facere ratione!</div>
        <button>Explore</button>
      </div>
      <div className="card bg4">
        <div className="title">decorate and furnish</div>
        <div className="title1">find, buy, sale a property</div>
        <div className="desc">Lorem ipsum dolor sit amet,
        Aliquid autem dignissimos quae facere ratione!</div>
        <button>Explore</button>
      </div>
    </div>
    </div>
  )
}
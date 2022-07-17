import React from "react";
import Article from "./Article";

const Content = () => {
  return <main>
    <section className="posts">
      <div className="container">
        <h1>Posts</h1>
        <ul className="list">
          <Article />
        </ul>
      </div>
    </section>
  </main>
}

export default Content
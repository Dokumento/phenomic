import "whatwg-fetch"

import React from "react"
import { Router, Route, browserHistory } from "react-router"
import { createApp, renderApp } from "phenomic-preset-default/lib/client"

import "./defaults.css"

import Header from "./components/Header"
import Home from "./components/Home"
import DocPage from "./components/DocPage"
import APIPage from "./components/APIPage"
import APIListPage from "./components/APIListPage"
import ChangelogPage from "./components/ChangelogPage"
import ChangelogListPage from "./components/ChangelogListPage"
import ShowcaseList from "./components/ShowcaseList"
import APITagListPage from "./components/APITagListPage"

const Wrapper = (props: Object) => <div><Header />{props.children}</div>

// eslint-disable-next-line react/no-multi-comp
const routes = () => (
  <Router history={browserHistory}>
    <Route component={Wrapper}>
      <Route path="/" component={Home} />
      <Route path="/api" component={APIListPage} />
      <Route
        path="/api/tag/*"
        component={APITagListPage}
        collection={{ collection: "tags", by: "collection", value: "api" }}
      />
      <Route path="/api/*" component={APIPage} collection="api" />
      <Route path="/changelog" component={ChangelogListPage} />
      <Route path="/changelog/*" component={ChangelogPage} collection="page" />
      <Route path="/docs/*" component={DocPage} collection="docs" />
      <Route path="/showcase" component={ShowcaseList} collection="showcase" />
    </Route>
  </Router>
)

export default createApp(routes)

if (module.hot) {
  module.hot.accept(() => renderApp(routes))
}

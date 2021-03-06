function postfix(url) {
  return `${url}.json`
}

function url(config: Object): string {
  const root = config.root || ""
  if (typeof config === "string") {
    return [root, config].join("/")
  }
  if (typeof config.id === "string") {
    return postfix([root, config.collection, "item", config.id].join("/"))
  }
  return postfix(
    [
      root,
      config.collection,
      `by-${config.by}`,
      config.value || "1",
      config.order || "desc",
      ...(config.limit ? [`limit-${config.limit}`] : []),
      ...(config.limit && config.after ? [`after-${config.after}`] : []),
    ].join("/"),
  )
}

export default url

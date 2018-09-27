
## Deployment

To deploy, run:

```sh
$ oc new-app --strategy=source bgard6977/docker-test~https://github.com/bgard6977/kotlin-server
```

The build will fail due to insufficient memory, so increase memory:

```sh
$ oc patch bc/kotlin-server -p '{"spec":{"resources":{"limits":{"memory":"1Gi"}}}}'
```

## References

- [Proxy](https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/)
- [More Proxy](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md)
- [Spring Logging](https://www.javadevjournal.com/spring/log-incoming-requests-spring/)
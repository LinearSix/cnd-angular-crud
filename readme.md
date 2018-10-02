
## dev setup (on mac with brew 2018-10-02)

1. `brew cask install chromedriver`
1. `brew install postgresql`
1. `brew services start postgresql`
1. `createdb`
1. `psql -c "create database volcano"`
1. `psql -c "create database volcano_test"`
1. `psql -c "create user postgres with SUPERUSER"`

## Deployment

To deploy, run:

```sh
$ oc new-app --strategy=source bgard6977/docker-test~https://github.com/gSchool/cnd-angular-crud
```

The build will fail due to insufficient memory, so increase memory:

```sh
$ oc patch bc/cnd-angular-crud -p '{"spec":{"resources":{"limits":{"memory":"1Gi"}}}}'
```

## References

- [Proxy](https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/)
- [More Proxy](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md)
- [Spring Logging](https://www.javadevjournal.com/spring/log-incoming-requests-spring/)
- [OpenShift WebHooks](https://docs.openshift.com/container-platform/3.5/dev_guide/builds/triggering_builds.html)
- [Build environment](https://github.com/bgard6977/docker-test)
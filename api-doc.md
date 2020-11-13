# 声闻接口文档

## 轮播图

|          |            | 说明         |
| -------- | ---------- | ------------ |
| 接口url  | /carousels | 首页的轮播图 |
| 请求方式 | get        |              |
| 请求参数 |            |              |

响应参数：

```javascript
{
    "code":1,
    "msg":"查询成功",
    "data":{
        "carousels":carousels
    }
}
```

响应参数说明：

| 参数名称                   | 说明                   |
| -------------------------- | ---------------------- |
| code                       | 1:查询成功 0：查询失败 |
| msg                        | 具体的操作详情         |
| carousels[0].carouselId    | 轮播图的id             |
| carousels[0].carouselSrc   | 轮播图的地址           |
| carousels[0].carouselTitle | 轮播图的主题           |



## 活动

### 1.1所有的活动（首页的活动精选）

|          |                   | 说明                           |
| -------- | ----------------- | ------------------------------ |
| 接口url  | /activity/findAll | 首页的活动精选(展示所有的活动) |
| 请求方式 | get               |                                |

请求参数：

```javascript
http:xxxxx:xxx/activity/findAll?limit=xxx&offset=xxx&order=xxx&searchxxx
```

请求参数说明：

| 参数名称 | 说明                             |
| -------- | -------------------------------- |
| limit    | 一页的大小                       |
| offset   | 起始的位置                       |
| order    | 排序规则    asc:升序，desc：降序 |
| search   | 可以为null,   模糊查询           |

响应参数：

```javascript
{
   "code":1,
    "msg":"查询成功",
    "data":{
         "rows":activities,
         "total":12
     }

}
```

响应参数说明：

| 参数名称              | 说明                   |
| --------------------- | ---------------------- |
| code                  | 1:查询成功 0：查询失败 |
| msg                   | 具体的操作详情         |
| rows[0].artivityId    | 活动的id               |
| rows[0].artivityTheme | 活动的主题             |
| rows[0].artivityCover | 活动封面               |
| rows[0].artivityCount | 浏览次数               |
| total                 | 总的数据数             |

### 1.2活动详情

|          |                  | 说明     |
| -------- | ---------------- | -------- |
| 接口url  | /activity/detail | 活动详情 |
| 请求方式 | get              |          |

请求参数

```javascript
{
    "activityId":1111
}
```

请求参数说明

| 参数名称   | 说明     |
| ---------- | -------- |
| artivityId | 活动的id |

响应参数

```javascript
{
    "code":1,
    "msg":"查询成功",
     "data":{
         "activity",activity,
          "fanType":0
          "status":0,
          "publisher":publisher
     }
}
```

响应参数说明

| 参数名称                         | 说明                         |
| -------------------------------- | ---------------------------- |
| code                             | 1:查询成功 0：查询失败       |
| msg                              | 具体的操作详情               |
| publisher.userId                 | 发布者的id                   |
| publisher.userName               | 发布者的用户名               |
| publisher.userinfo.userinfoPhoto | 发布者的头像                 |
| fanType                          | 0:表示未关注   1:表示已关注  |
| status                           | 0:表示未报名   1：表示已报名 |
| activity.activityId              | 活动的id                     |
| activity.activityTheme           | 活动的主题                   |
| activity.activityTime            | 活动发布的时间               |
| activity.artivityCover           | 活动的封面                   |
| activity.artivityCount           | 浏览次数                     |
| activity.activityGuestInfo       | 特邀嘉宾的描述               |
| activity.activityContent         | 活动内容                     |
| activity.activityGuestPhoto      | 嘉宾的照片                   |
| activity.activityStartTime       | 开课时间                     |
| activity.activityDuration        | 开课时长                     |
| activity.activitySpeaker         | 主讲人                       |
| artivities[0].artivityAddress    | 地址                         |

### 1.3我要报名

|          |                               | 说明                                        |
| -------- | ----------------------------- | ------------------------------------------- |
| 接口url  | /activity/sign                | 我要报名                                    |
| 请求方式 | get                           |                                             |
| 请求参数 | {toUserId:111,activityId:111} | toUserId:活动发布者的id,activityId:活动的id |
| 响应参数 | {code:1,msg:支付成功}         | code:0:报名失败1：报名成功，msg：具体信息   |

请求参数：

```javascript
{
    "toUserId":xxxx,
    "activityId":xxxx
}
```

请求参数说明

| 参数名称   | 说明       |
| ---------- | ---------- |
| toUserId   | 发布者的id |
| activityId | 活动的id   |

响应参数：

```javascript
{
    "code":1,
     "msg":"报名成功"
}
```

响应参数说明：

| 参数名称 | 说明                |
| -------- | ------------------- |
| code     | 1报名成功 0报名失败 |
| msg      | 具体的操作信息      |



## 文章

### 1.1查询所有的文章

|          |                                        | 说明                                                         |
| -------- | -------------------------------------- | ------------------------------------------------------------ |
| 接口url  | /article/findAll                       | 查询所有的文章（首页的文章）                                 |
| 请求方式 | get                                    |                                                              |
| 请求参数 | limit=10&offset=0&order=asc&search=xxx | limit:页的大小，offset:起始位置，order:排序，search:可以为null,模糊查询 |



响应参数：

```javascript
{
    "code":1,
   	"msg":"查询成功",
     "data":{
         "rows":articles,
          "total":111
     }
}
```

响应参数的说明：

| 参数                     | 说明       |
| ------------------------ | ---------- |
| rows[0].articleId        | 文章的id   |
| rows[0].articleCover     | 文章的封面 |
| rows[0].articleViewCount | 观看的次数 |
| rows[0].articleTime      | 发布的时间 |
| rows[0].articleHeadline  | 文章标题   |
| rows[0].userName         | 作者的名字 |
| rows[0].userId           | 作者的id   |
| total                    | 总的数据数 |

### 1.2 查询文章详情

|          |                   | 说明     |
| -------- | ----------------- | -------- |
| 接口url  | /articles/content | 文章详情 |
| 请求方式 | get               |          |

请求参数

```javascript
{
    "articleId":rows[0].articleId,
    "publisherId":rows[0].userId,
}
```

| 参数        | 说明     |
| ----------- | -------- |
| articleId   | 文章的id |
| publisherId | 作者的id |

响应参数

```javascript
{
    "code":1,
     "msg":"查询成功",
     "data":{
         "publisher":user,
          "article":article,
          "domain":domain
          "fanType":1
     }
    
}
```

响应参数说明

| 参数                    | 说明                |
| ----------------------- | ------------------- |
| publisher.userId        | 作者的id            |
| publisher.userName      | 用户名字            |
| publisher.userinfoPhoto | 头像                |
| fanType                 | 0:未关注  1：已关注 |
| article.articleId       | 文章的id            |
| article.articleText     | 文章内容            |
| article.articleHeadline | 文章标题            |
| article.articleTime     | 发布的时间          |
| domain.domainId         | 领域的id            |
| domain.domainName       | 领域的名字          |

### 1.3相关阅读

|          |                   | 说明     |
| -------- | ----------------- | -------- |
| 接口url  | /article/relation | 相关阅读 |
| 请求方式 | get               |          |

请求参数：

```javascript
{
    "articleId":rows[0].articleId
}
```

| 参数      | 说明     |
| --------- | -------- |
| articleId | 文章的id |

响应参数

```javascript
{
    "code":1,
     "msg":"查询成功",
     "data":{
         "rows":articles
     }
}
```

响应参数说明

| 参数                     | 说明                    |
| ------------------------ | ----------------------- |
| rows[0].articleId        | 文章的id（只传4条数据） |
| rows[0].articleCover     | 文章的封面              |
| rows[0].articleViewCount | 观看的次数              |
| rows[0].articleTime      | 发布的时间              |
| rows[0].articleHeadline  | 文章标题                |
| rows[0].userName         | 作者的名字              |
| rows[0].userId           | 作者的id                |

### 1.4文章，动态点赞

|          |                         | 说明                                |
| -------- | ----------------------- | ----------------------------------- |
| 接口url  | /article/content/like   | 评论点赞                            |
| 请求方式 | update                  |                                     |
| 请求参数 | {articalId:1111,type:1} | articalId:文章id,type:1:文章 0:动态 |
| 响应参数 | {code:1,msg:点赞成功}   |                                     |

请求参数

```javascript
{
   "articalId":11,
    "type":1
}
```

请求参数说明

| 参数      | 说明           |
| --------- | -------------- |
| articalId | 文章或者动态id |
| type      | 0：文章 1:动态 |

响应参数

```javascript
{
    "code":1,
    "msg":"点赞成功"
}
```



## 领域

### 1.1查询所有领域：

|          |                     | 说明         |
| -------- | ------------------- | ------------ |
| 接口url  | /domain/findDomains | 查询所有领域 |
| 请求方式 | get                 |              |
| 请求参数 |                     |              |

响应参数：

```javascript
{
    "code":1,
    "msg":"查询成功",
   	"data":{
        "rows":domains
    }
}
```

响应参数说明

| 参数               | 说明       |
| ------------------ | ---------- |
| rows[0].domainId   | 领域的id   |
| rows[0].domainName | 领域的名字 |



### 1.2查询某个领域的所有文章

|          |                 | 说明               |
| -------- | --------------- | ------------------ |
| 接口url  | /domain/article | 查询领域的所有文章 |
| 请求方式 | get             |                    |

请求参数

```javascript
http:xxx:xxx/domain/article?limit=x&offset=x&domainId=xx
```

请求参数说明

| 参数     | 说明     |
| -------- | -------- |
| limit    | 页的大小 |
| offset   | 起始位置 |
| domainId | 领域的id |

响应参数

```javascript
{
    "code":1,
    "msg":"查询成功",
    "data":{
         "rows":articles，
         "total":1111
     }
}
```

| 参数                     | 说明       |
| ------------------------ | ---------- |
| rows[0].articleId        | 文章的id   |
| rows[0].articleCover     | 文章的封面 |
| rows[0].articleViewCount | 观看的次数 |
| rows[0].articleTime      | 发布的时间 |
| rows[0].articleHeadline  | 文章标题   |
| rows[0].userName         | 作者的名字 |
| rows[0].userId           | 作者的id   |
| total                    | 总的数据数 |

## 评论

### 1.1热门评论

|          |              | 说明                     |
| -------- | ------------ | ------------------------ |
| 接口url  | /comment/hot | 热门评论（两条）(按点赞) |
| 请求方式 | get          |                          |

请求参数

```javascript
{
    "id":11,
   	"commentType":0
}
```

请求参数说明

| 参数        | 说明             |
| ----------- | ---------------- |
| id          | 文章或者动态的id |
| commentType | 0:文章，1：动态  |

响应参数

```java
{
    "code":1,
    "msg":"查询成功",
    "data":{
        "rows":comments
    }
}
```

响应参数说明

| 参数                  | 说明                        |
| --------------------- | --------------------------- |
| rows[0].userId        | 用户的id                    |
| rows[0].userinfoPhoto | 头像                        |
| rows[0].userName      | 用户的名字                  |
| rows[0].commentText   | 评论的内容                  |
| rows[0].commentCount  | 点赞数                      |
| rows[0].commentDepth  | 评论的深度                  |
| rows[0].commentTime   | 评论的时间                  |
| rows[0].commentType   | 评论的类型，0:文章，1：动态 |
| rows[0].commentId     | 评论的id                    |



### 1.2文章或者动态评论

|          |                  | 说明                       |
| -------- | ---------------- | -------------------------- |
| 接口url  | /comment/findAll | 文章或者动态评论（按时间） |
| 请求方式 | get              |                            |

请求参数

```javascript
{
    "id":111,
    "commentType":1,
    "limit":1,
     "offset":11
}
```

请求参数说明

| 参数        | 说明             |
| ----------- | ---------------- |
| id          | 文章或者动态的id |
| commentType | 0:文章，1：动态  |
| limit       | 评论的数目       |
| offset      | 起始位置         |

响应参数

```javascript
{
    "code":1,
     "msg":"查询成功",
     "data":{
         "rows":comments
     }
}
```

响应参数说明

| 参数                  | 说明                        |
| --------------------- | --------------------------- |
| rows[0].userId        | 用户的id                    |
| rows[0].userinfoPhoto | 头像                        |
| rows[0].userName      | 用户的名字                  |
| rows[0].commentText   | 评论的内容                  |
| rows[0].commentCount  | 点赞数                      |
| rows[0].commentDepth  | 评论的深度                  |
| rows[0].commentTime   | 评论的时间                  |
| rows[0].commentType   | 评论的类型，0:文章，1：动态 |
| rows[0].commentId     | 评论的id                    |

### 1.3查看评论用户的评论

|          |                 | 说明                         |
| -------- | --------------- | ---------------------------- |
| 接口url  | /comment/person | 查看评论用户的评论（按时间） |
| 请求方式 | get             |                              |

请求参数

```javascript
{
    "commentId":111,
     "depth":111
}
```

请求参数说明

| 参数      | 说明       |
| --------- | ---------- |
| commentId | 评论的id   |
| depth     | 评论的深度 |

响应的参数

```javascript
{
    "code":1,
     "msg":"查询成功",
      "data":{
          "rows":comments
      }
}
```

响应参数说明

| 参数                  | 说明                        |
| --------------------- | --------------------------- |
| rows[0].userId        | 用户的id                    |
| rows[0].userinfoPhoto | 头像                        |
| rows[0].userName      | 用户的名字                  |
| rows[0].commentText   | 评论的内容                  |
| rows[0].commentCount  | 点赞数                      |
| rows[0].commentDepth  | 评论的深度                  |
| rows[0].commentTime   | 评论的时间                  |
| rows[0].commentType   | 评论的类型，0:文章，1：动态 |
| rows[0].commentId     | 评论的id                    |

### 1.4评论点赞

|          |               | 说明     |
| -------- | ------------- | -------- |
| 接口url  | /comment/like | 评论点赞 |
| 请求方式 | update        |          |

请求参数

```javascript
{
    "commentId":1111
}
```

请求参数说明

| 参数      | 说明     |
| --------- | -------- |
| commentId | 评论的id |

响应参数

```javascript
{
    "code":1,
     "msg":"更新成功"
}
```

### 1.5评论1：用户评论文章

|          |                          | 说明     |
| -------- | ------------------------ | -------- |
| 接口url  | /comment/discuss/article | 评论文章 |
| 请求方式 | post                     |          |

请求参数

```javascript
{
     "id":22,
     "toUserId":333,
     "commentText":"xxxx",
     "commentType":1,
}
```

请求参数说明

| 参数        | 说明              |
| ----------- | ----------------- |
| Id          | 文章的id          |
| toUserId    | 文章的作者id      |
| commentText | 评论的内容        |
| commentType | 0：文章 ，1：动态 |

响应参数

```javascript
{
    "code":1,
    "msg":"评论成功"
}
```

### 1.6评论2：用户评论用户

|          |                         | 说明           |
| -------- | ----------------------- | -------------- |
| 接口url  | /comment/discuss/person | 评论用户的评论 |
| 请求方式 | post                    |                |

请求参数

```javascript
{
    "commentId":1111，
    "id":111
    "commentText":"xxxx",
    "commentDepth":22
    "commentType":1,
   	"toUserId":11
}
```

请求参数说明

| 参数         | 说明           |
| ------------ | -------------- |
| commentId    | 评论的id       |
| id           | 文章或动态的id |
| commentText  | 评论的内容     |
| commentDepth | 评论的深度     |
| commentType  | 0:文章 1：动态 |
| toUserId     | 评论用户的id   |

响应参数

```javascript
{
    "code":1,
    "msg":"评论成功"
}
```





## 支付

|          |                       | 说明                 |
| -------- | --------------------- | -------------------- |
| 接口url  | /pay                  | 支付                 |
| 请求方式 | post                  |                      |
| 响应参数 | {code:1,msg:支付成功} | code:1：成功 0：失败 |

请求参数

```javascript
{
    "admireMoney":10,
    "articleId":11,
     "toUserId":111
}
```

请求参数说明

| 参数        | 说明           |
| ----------- | -------------- |
| admireMoney | 赞赏的金额     |
| articleId   | 文章的id       |
| toUserId    | 赞赏的用户的id |

响应参数

```javascript
{
    "code":1,
    "msg":"支付成功"
}
```



## 历史记录

### 1.1查询历史记录

|          |                 | 说明               |
| -------- | --------------- | ------------------ |
| 接口url  | /search/history | 查询用户的历史记录 |
| 请求方式 | get             | 查询               |
| 请求参数 |                 |                    |

响应参数

```javascript
{
    "code":1,
     "msg":"查询成功",
      "data":{
          "rows":historyList
      }
}
```

响应参数说明

| 参数    | 说明           |
| ------- | -------------- |
| rows[0] | 历史记录的内容 |

### 1.2删除历史记录

|          |                       | 说明               |
| -------- | --------------------- | ------------------ |
| 接口url  | /search/deleteHistory | 删除用户的历史记录 |
| 请求方式 | delete                | 删除               |
| 请求参数 |                       |                    |

响应参数

```javascript
{
    "code":1,
    "msg":"评论成功"
}
```

### 1.3搜索内容

|          |                 | 说明           |
| -------- | --------------- | -------------- |
| 接口url  | /search/content | 搜索框         |
| 请求方式 | get             |                |
| 请求参数 | keyword="ugd"   | keyword:关键字 |

响应参数

```javascript
{
    "code":1,
     "msg":"查询成功",
     "data":{
         "users":userList
         "articles":article
     }
}
```

响应参数说明

| 参数                         | 说明                   |
| ---------------------------- | ---------------------- |
| users[0].userId              | 用户id                 |
| user[0].userName             | 用户名字               |
| user[0].userinfoPhoto        | 头像                   |
| user[0].fansType             | 1：已关注，0表示未关注 |
| articles[0]. articleId       | 文章的id               |
| articles[0]. articleHeadline | 文章标题               |
| articles[0]. articleTime     | 发布时间               |

## 收藏

### 1.1选择收藏

|          |                          | 说明       |
| -------- | ------------------------ | ---------- |
| 接口url  | /favorites/findFavorites | 查询收藏夹 |
| 请求方式 | get                      | 查询       |
| 请求参数 |                          |            |

响应参数

```javascript
{
    "code":1,
     "msg":"查询成功",
     "data":{
         "rows":favorites
     }
}
```

响应参数说明

| 参数                    | 说明         |
| ----------------------- | ------------ |
| rows[i].favoriteId      | 文件夹的id   |
| rows[i].favoriteName    | 文件夹的名字 |
| rows[i].favoriteStatus  | 收藏夹的状态 |
| rows[i].favoriteCount   | 收藏的数目   |
| rows[i].favouritesPhoto | 封           |

### 1.2确定收藏

|          |                    | 说明             |
| -------- | ------------------ | ---------------- |
| 接口url  | /favorites/confirm | 确定收藏的收藏夹 |
| 请求方式 | post               |                  |

请求参数

```javascript
{
    "favoritesId":111,
     "articleId":1111
}
```

请求参数说明

| 参数        | 说明     |
| ----------- | -------- |
| favoritesId | 文件夹id |
| articleId   | 文章的id |

响应参数

```javascript
{
    "code":1,
    "msg":"收藏成功"
}
```



### 1.3删除文件夹

|          |                   | 说明             |
| -------- | ----------------- | ---------------- |
| 接口url  | /favorites/delete | 确定收藏的收藏夹 |
| 请求方式 | delete            |                  |

请求参数

```javascript
{
    "favoritesId":111
}
```

请求参数说明

| 参数        | 说明     |
| ----------- | -------- |
| favoritesId | 文件夹id |

响应参数

```javascript
{
    "code":1,
    "msg":"删除成功"
}
```

### 1.4创建和编辑文件夹

|          |                             | 说明       |
| -------- | --------------------------- | ---------- |
| 接口url  | /favorites/creat            | 创建收藏夹 |
| 请求方式 | put                         |            |
| 响应参数 | {"code":1,"msg":"操作成功"} |            |

请求参数

```javascript
{
   "favoriteId":1111,
   "favoriteName":xxx,
   "favoriteDescribe":xxx,
   "favoriteStatus":xxx,
   "favoritePhoto":xxx
}
```

请求参数说明

| 参数             | 说明                                            |
| ---------------- | ----------------------------------------------- |
| favoriteId       | 文件夹id                                        |
| favoriteName     | 文件夹的名字                                    |
| favoriteDescribe | 文件夹的描述                                    |
| favoriteStatus   | 文件夹的状态                                    |
| favoritePhoto    | 文件夹的封面 ，如果是创建，不需要传文件夹的id。 |

响应参数

```javascript
{
    "code":1,
    "msg":"创建成功"
}
```



## 动态

### 1.1查询动态

|          |                  | 说明 |
| -------- | ---------------- | ---- |
| 接口url  | /dynamic/content | 动态 |
| 请求方式 | get              |      |

请求参数

```javascript
{
    "limit":10,
     "offset":0,
     "type":1
}
```

请求参数说明

| 参数   | 说明                                           |
| ------ | ---------------------------------------------- |
| limit  | 页的大小                                       |
| offset | 起始位置                                       |
| type   | 0：查询自己的动态，1:关注的用户的动态，2：热门 |

响应参数

```javascript
{
	"code":1,
    "msg":"查询成功",
     "data":{
		 "total":111
         "rows":daynamicList
     }
}
```

响应参数说明

| 参数                             | 说明                           |
| -------------------------------- | ------------------------------ |
| total                            | 动态的总数                     |
| rows[0].userId                   | 用户id                         |
| rows[0].userName                 | 用户名字                       |
| rows[0].uesrinfoPhoto            | 头像                           |
| rows[0].fansType                 | 注的状态1：已关注，0表示未关注 |
| rows[0].dynamic.dynamicTime      | 发表时间                       |
| rows[0].dynamicd.ynamicId        | 动态的id                       |
| rows[0].dynamicd.ynamicText      | 动态的内容                     |
| rows[0].dynamic.dynamicLikeCount | 点赞次数                       |
| rows[0].dynamic.dynamicLikeCount | 评论次数                       |
| rows[0].dynamic.shareCount       | 分享次数                       |

### 1.2发表动态

|          |                             | 说明                        |
| -------- | --------------------------- | --------------------------- |
| 接口url  | /dynamic/insert             | 发布动态                    |
| 请求方式 | post                        |                             |
| 请求参数 | {dynamicText:"xxx"}         | dynamicText:发表动态的内容, |
| 响应参数 | {"code":1,"msg":"发布成功"} |                             |

请求参数

```javascript
{
    "dynamicText":"xxx"
}
```

请求参数说明

| 参数        | 说明           |
| ----------- | -------------- |
| dynamicText | 发表动态的内容 |

响应参数

```javascript
{
	"code":1,
    "msg":"发表成功"
}
```



### 1.3转发动态

|          |                         | 说明     |
| -------- | ----------------------- | -------- |
| 接口url  | /dynamic/forwardarticle | 发布动态 |
| 请求方式 | post                    |          |

请求参数

```javascript
{
    "shareText":"xxx",
    "dynamicId":222
}
```

请求参数说明

| 参数      | 说明           |
| --------- | -------------- |
| shareText | 转发的内容     |
| dynamicId | 转发的文章的id |

响应参数

```javascript
{
	"code":1,
    "msg":"转发成功"
}
```

## 个人主页

### 1.1个人主页-上面资料

|          |                       | 说明     |
| -------- | --------------------- | -------- |
| 接口url  | /homePage/information | 个人资料 |
| 请求方式 | get                   |          |

请求参数

```javascript
{
    "userId":111
}
```

请求参数说明

| 参数   | 说明     |
| ------ | -------- |
| userId | 用户的id |

响应参数

```javascript
{
    "code":1,
     "msg":"查询成功",
     "data":{
         "userInfo":userInfo,
          "likeCount":1111，
          "favoriateCount":11111,
          "fansCount":111111,
          "attentionCount":1111,
          "fanstype":1
     }
}
```

响应参数说明

| 参数                    | 说明                             |
| ----------------------- | -------------------------------- |
| userInfo.userId         | 用户id                           |
| userInfo.userName       | 用户名                           |
| userInfo.userinfoPhoto  | 头像                             |
| userInfo.userinfoSex    | 性别                             |
| userInfo.userinfoWeixin | 微博                             |
| likeCount               | 点赞数                           |
| favoriateCount          | 收藏的次数                       |
| fansCount               | 粉丝的数目                       |
| attentionCount          | 关注的次数                       |
| fansType                | 关注的状态（0：未关注，1：关注） |

### 1.2查看我的关注（自己只能看自己的）

|          |                     | 说明                   |
| -------- | ------------------- | ---------------------- |
| 接口url  | /homePage/attention | 查看我的关注，我的粉丝 |
| 请求方式 | get                 |                        |

请求参数

```javascript
{
    "type":1
}
```

请求参数说明

| 参数 | 说明                            |
| ---- | ------------------------------- |
| type | 0:查看我的关注，1：查看我的粉丝 |

响应参数：

```javascript
{
    "code":1,
    "msg":"查询成功",
    "data":{
        "rows":userlist
    }
}
```

响应参数说明

| 参数                           | 说明                           |
| ------------------------------ | ------------------------------ |
| rows[0].userId                 | 用户的id                       |
| rows[0].userName               | 用户名                         |
| rows[0].userinfoSignature      | 用户的签名                     |
| rows[0].userinfo.userinfoPhoto | 头像                           |
| rows[0].fansType               | 关注的状态，0：没关注，1：关注 |

### 1.3作者主页：

#### 1.3.1关注，拉黑，取消关注作者

|          |                            | 说明                     |
| -------- | -------------------------- | ------------------------ |
| 接口url  | /homePage/author/attention | 拉黑，关注，取消关注用户 |
| 请求方式 | get                        |                          |

请求参数：

```javascript
{
    "toUserId":11111,
     "fansType":1
}
```

请求参数说明

| 参数     | 说明                      |
| -------- | ------------------------- |
| toUserId | 作者的id                  |
| fansType | 0:取消关注，1关注，2:拉黑 |

响应参数

```javascript
{
    "code":1,
     "msg":"关注成功"     
}
```

响应参数说明

| 参数 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| code | 1：关注，取消关注，拉黑  成功  0：关注，取消关注，拉黑  失败 |
| msg  | 具体的操作信息                                               |

#### 1.3.2发起举报

|          |                  | 说明     |
| -------- | ---------------- | -------- |
| 接口url  | /homePage/report | 发起举报 |
| 请求方式 | get              |          |
| 请求参数 |                  |          |

响应参数

```javascript
{
    "code":1,
    "msg":"查询成功",
     "data":{
         "rows":reportTypes
     }
}
```

响应参数说明

| 参数                   | 说明           |
| ---------------------- | -------------- |
| rows[0].reportTypeId   | 举报的类型的id |
| rows[0].reportTypeName | 举报的类型     |

#### 1.3.3举报文章，动态，作者

|          |                                | 说明         |
| -------- | ------------------------------ | :----------- |
| 接口url  | /homePage/report/certainReport | 确定举报用户 |
| 请求方式 | get                            |              |

请求参数

```javascript
{
    "reportById":111,
    "reportType":1,
    "reportTypeId":11,
    "reportTypeName":"垃圾信息"
}
```

请求参数说明

| 参数           | 说明                   |
| -------------- | ---------------------- |
| reportById     | 文章，动态，作者的id   |
| reportType     | 文章，1：动态，2：作者 |
| reportTypeId   | 举报的类型的id         |
| reportTypeName | 举报的类型             |

响应参数

```javascript
{
    "code":1,
     "msg":"举报成功"
}
```

### 1.4个人主页-动态

|          |                   | 说明         |
| -------- | ----------------- | :----------- |
| 接口url  | /homePage/dynamic | 个人主页动态 |
| 请求方式 | get               |              |

请求参数

```javascript
{
    "userId":111，
    "limit":10,
    "offset":0
}
```

请求参数说明

| 参数   | 说明     |
| ------ | -------- |
| userId | 用户的id |
| limit  | 页的大小 |
| offset | 起始位置 |

响应参数

```javascript
{
    "code":1,
    "msg":"查询成功",
     "data":{
		 "total":111
         "rows":daynamicList
     }
}
```

响应参数说明

| 参数                             | 说明                           |
| -------------------------------- | ------------------------------ |
| total                            | 动态的总数                     |
| rows[0].userId                   | 用户id                         |
| rows[0].userName                 | 用户名字                       |
| rows[0].uesrinfoPhoto            | 头像                           |
| rows[0].fansType                 | 注的状态1：已关注，0表示未关注 |
| rows[0].dynamic.dynamicTime      | 发表时间                       |
| rows[0].dynamicd.ynamicId        | 动态的id                       |
| rows[0].dynamicd.ynamicText      | 动态的内容                     |
| rows[0].dynamic.dynamicLikeCount | 点赞次数                       |
| rows[0].dynamic.dynamicLikeCount | 评论次数                       |
| rows[0].dynamic.shareCount       | 分享次数                       |

### 1.5个人主页-文章

|          |                   | 说明 |
| -------- | ----------------- | ---- |
| 接口url  | /homePage/article | 文章 |
| 请求方式 | get               |      |

请求参数

```javascript
{
    "userId":111,
     "limit":10,
     "offset":0
}
```

请求参数说明

| 参数   | 说明     |
| ------ | -------- |
| userId | 用户的id |
| limit  | 页的大小 |
| offset | 起始位置 |

响应参数

```javascript
{
    "code":1,
   	"msg":"查询成功",
     "data":{
         "rows":articles,
          "total":111
     }
}
```

响应参数说明

| 参数                     | 说明       |
| ------------------------ | ---------- |
| rows[0].articleId        | 文章的id   |
| rows[0].articleCover     | 文章的封面 |
| rows[0].articleViewCount | 观看的次数 |
| rows[0].articleTime      | 发布的时间 |
| rows[0].articleHeadline  | 文章标题   |
| rows[0].userName         | 作者的名字 |
| rows[0].userId           | 作者的id   |
| total                    | 总的数据数 |

### 1.6个人主页-资料 

|          |                | 说明          |
| -------- | -------------- | ------------- |
| 接口url  | /homePage/info | 个人主页-资料 |
| 请求方式 | get            |               |

请求参数

```javascript
{
    "userId":111
}
```

请求参数说明

| 参数   | 说明   |
| ------ | ------ |
| userId | 用户id |

响应参数

```javascript
{
    "code":1,
     "msg":"查询成功",
     "data":{
         "userInfo":userInfo,
         "rows":domain
     }
}
```

响应参数说明

| 参数                       | 说明         |
| -------------------------- | ------------ |
| userInfo.provinceName      | 所属省份     |
| userInfo.cityName          | 城市         |
| userInfo.userinfoSignature | 签名         |
| userInfo.userinfoQq        | QQ           |
| userInfo.userinfoWeibo     | 微博         |
| userInfo.userinfoWeixin    | 微信         |
| rows.domain[0].domainId    | 关注领域的id |
| rows[0].domainName         | 领域的名字   |

## 1.登录

###   1.1 请求验证码,并把验证码交给前端，进行比较

|          |               | 说明           |
| -------- | ------------- | -------------- |
| 接口url  | /user/getCode | 获取验证码     |
| 请求方式 | post          |                |
| 请求参数 | {email:xxx}   | email:邮箱账号 |

响应参数：

```javascript
{
    "code":1,
     "msg":"操作成功",
     "data":{
         "result":xxxx
     }
}
```

相应参数说明：

| 参数名称 | 说明                   |
| -------- | ---------------------- |
| code     | 0：表示失败1：表示成功 |
| msg      | 具体的信息             |
| result   | 验证码                 |

### 1.2通过密码登录

|          |               | 说明 |
| -------- | ------------- | ---- |
| 接口url  | /user/doLogin | 登录 |
| 请求方式 | post          |      |

请求参数

```javascript
{
    "userEmail":xxxx,
    "userPassword":xxxx,
     "verifyCode":xxx
}
```

请求参数说明：

| 参数名称     | 说明     |
| ------------ | -------- |
| userEmail    | 邮箱账号 |
| userPassword | 密码     |
| verifyCode   | 验证码   |

响应参数：

```javascript
{
    "code":1,
     "msg":"密码验证成功"
}
```

相应参数说明：

| 参数名称 | 说明                   |
| -------- | ---------------------- |
| code     | 0：表示失败1：表示成功 |
| msg      | 具体的信息             |

## 我的钱包

|          |         | 说明         |
| -------- | ------- | ------------ |
| 接口url  | /wallet | 点击我的钱包 |
| 请求方式 | post    |              |
| 请求参数 |         |              |

响应参数：

```javascript
{
    "code":1,
    "msg":"操作成功",
    "data":{
        "userId":xxx
        "wallet":wallet          
    }    
}
```

响应参数说明：

| 参数名称                      | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| code                          | 0：表示失败1：表示成功                                       |
| msg                           | 具体的信息                                                   |
| userId                        | 当前用户的id                                                 |
| wallet.walletId               | 钱包id                                                       |
| wallet.walletBalance          | 钱包余额                                                     |
| wallet.walletAccount          | 绑定的银行账号，如果为null,说明未绑定，如果不为null,就说明已经绑定 |
| wallet.admire.userId          | 用户的id                                                     |
| wallet.admire.toUserId        | 赞赏的用户的id(需要与当前用户进行比较，相等代表是被赞赏，赞赏金额为正，不相等为负) |
| wallet.admire.admireMoney     | 赞赏的金额                                                   |
| wallet.admire.articleId       | 赞赏文章的id                                                 |
| wallet.admire.admireTime      | 赞赏的时间                                                   |
| wallet.admire.articleHeadline | 文章的主题                                                   |

### 提现

#### 1.1绑定银行账号和密码

|          |                     | 说明         |
| -------- | ------------------- | ------------ |
| 接口url  | /wallet/bindAccount | 绑定银行卡号 |
| 请求方式 | post                |              |
| 请求参数 |                     |              |

请求参数

```javascript
{
    "walletAccount":xxxx,
    "walletPassword":xxxx
}
```

请求参数说明：

| 参数名称       | 说明           |
| -------------- | -------------- |
| walletAccount  | 绑定的账号     |
| walletPassword | 银行账号的密码 |

响应参数：

```javascript
{
    "code":1,
    "msg":"绑定成功"
}
```

响应参数说明:

| 参数名称 | 说明           |
| -------- | -------------- |
| code     | 1:成功 2：失败 |
| msg      | 具体的操作信息 |

#### 1.2提现记录

|          |                | 说明     |
| -------- | -------------- | -------- |
| 接口url  | /wallet/record | 提现记录 |
| 请求方式 | get            |          |
| 请求参数 |                |          |

响应参数：

```javascript
{
    "code":1,
    "msg":查询成功，
    "data":{
        "record":record
    }
}
```

响应参数说明：

| 参数名称                  | 说明                               |
| ------------------------- | ---------------------------------- |
| code                      | 1:查询成功2：查询失败              |
| msg                       | 具体的操作信息                     |
| record.walletId           | 钱包的id                           |
| record.walletRecordMoney  | 提现金额                           |
| record.walletRecordTime   | 提现的时间                         |
| record.walletRecordStatus | 提现的状态 0:正在提现，1：提现成功 |

## 浏览记录（点击浏览）

### 1.查看记录

|          |                        | 说明     |
| -------- | ---------------------- | -------- |
| 接口url  | /article/record/select | 浏览记录 |
| 请求方式 | get                    |          |
| 请求参数 |                        |          |

响应参数：

```javascript
{
    "code":1,
   	"msg":"查询成功",
     "data":{
         "rows":browse
     }
}
```

响应参数说明：

| 参数名称              | 说明                  |
| --------------------- | --------------------- |
| code                  | 1:查询成功2：查询失败 |
| msg                   | 具体的操作信息        |
| rows.visitId          | 浏览记录的id          |
| rows.articleId        | 文章的id              |
| rows.userId           | 作者的id              |
| rows.articelCover     | 封面照片的src地址     |
| rows.articelHeadline  | 文章的标题            |
| rows.articelTime      | 发布的时间            |
| rows.articelViewCount | 观看的次数            |
| rows.publisher        | 作者                  |

### 1.2删除浏览记录

|          |                        | 说明     |
| -------- | ---------------------- | -------- |
| 接口url  | /article/record/delete | 浏览记录 |
| 请求方式 | post                   |          |

请求参数

```javascript
{
    "array":[1,2,3,4,5]
}
```

请求参数说明

| 参数名称 | 说明         |
| -------- | ------------ |
| array    | 浏览记录的id |

响应参数：

```javascript
{
    "code":1,
    "msg":"删除成功"
}
```

响应参数说明：

| 参数名称 | 说明                  |
| -------- | --------------------- |
| code     | 1:删除成功 0:删除失败 |
| msg      | 具体的操作的信息      |

## 我的活动

### 个人的报名的所有的活动

|          |                  | 说明     |
| -------- | ---------------- | -------- |
| 接口url  | /activity/myself | 我的活动 |
| 请求方式 | get              |          |
| 请求参数 |                  |          |

响应参数：

```javascript
{
    "code":1,
     "msg":"查询成功",
     "data":{
         "rows":activities
     }
}
```

响应参数说明：

| 参数名称           | 说明                  |
| :----------------- | --------------------- |
| code               | 1:查询成功2：查询失败 |
| msg                | 具体的操作信息        |
| rows.activityId    | 活动的id              |
| rows.activityTheme | 活动的主题            |
| rows.activityCover | 封片的图片地址        |
| rows.activityCount | 游览的次数            |

### 活动详情

## 我要投稿

|          |                       | 说明     |
| -------- | --------------------- | -------- |
| 接口url  | /articel/Contribution | 我要投稿 |
| 请求方式 | post                  |          |

请求参数：

```javascript
{
    "articleCover":xxx,
   	"articleHeadline":xxx,
    "articleText":xxx
}
```

请求参数说明:

| 参数名称        | 说明              |
| --------------- | ----------------- |
| articelCover    | 文章头图的src地址 |
| articelHeadline | 标题              |
| articelText     | 正文              |

响应参数：

```javascript
{
  	"code":1,
     "msg":"投稿成功"
}
```

响应参数说明

| 参数名称 | 说明                  |
| -------- | --------------------- |
| code     | 1:投稿成功 0:投稿失败 |
| msg      | 具体的操作的信息      |

## 设置

### 1.账号资料

#### 1.1查看个人资料

|          |            | 说明     |
| -------- | ---------- | -------- |
| 接口url  | /user/info | 个人信息 |
| 请求方式 | get        |          |
| 请求参数 |            |          |

响应参数：

```javascript
{
    "code":1,
     "msg":"个人资料查询成功"
      "data":{
          "useinfo",userinfo,
           "domain":domains
      }
}
```

响应参数说明：

| 参数名称                       | 说明                   |
| ------------------------------ | ---------------------- |
| code                           | 1:查询成功  0:查询失败 |
| msg                            | 具体的操作的信息       |
| userinfo.userId                | 当前用户的id           |
| userinfo.userinfoPhoto         | 头像                   |
| userinfo.userName              | 用户名                 |
| userinfo.userifoSignature      | 签名                   |
| userinfo.userinfoSex           | 性别                   |
| userinfo.province.provinceName | 省名                   |
| userinfo.city.cityName         | 市名                   |
| userinfo.userinfoQq            | QQ                     |
| userinfo.userinfoWeixin        | 微信                   |
| userinfo.userinfoWeibo         | 微博                   |
| domain[1].domainId             | 数组,领域的id          |
| domain[1].domainName           | 领域的名字             |

#### 1.2提交个人资料

|          |                  | 说明               |
| -------- | ---------------- | ------------------ |
| 接口url  | /user/submitInfo | 提交编辑的个人信息 |
| 请求方式 | post             |                    |

请求参数：

```javascript
{
    "userId":xxx,
   	"userinfoPhoto":xxx,
    "userName":xxx,
    "userifoSignature":xxx,
     "userinfoSex":xxx,
     "province":{"provinceId",xxx,"provinceName":xxx},
     "cityId":{"cityId",xxx,"cityName":xxx},
      "domain":[
          {"domainId":xxx,"domainName":xxx}
          ....
      ]
}
```

响应参数说明：

| 参数名称         | 说明         |
| ---------------- | ------------ |
| userId           | 当前用户的id |
| userinfoPhoto    | 头像         |
| userName         | 用户名       |
| userifoSignature | 个人签名     |
| userinfoSex      | 性别         |
| provinceId       | 省名的id     |
| provinceName     | 省名         |
| cityId           | 市名的id     |
| cityName         | 市名         |
| domainId         | 领域的id     |
| domainName       | 领域的名字   |

响应参数

```javascript
{
    "code":1,
     "msg":"编辑个人资料成功",
}
```

### 2.账号绑定与安全

#### 2.1获取验证码

|          |                  | 说明             |
| -------- | ---------------- | ---------------- |
| 接口url  | /user/phone/code | 绑定或者更换手机 |
| 请求方式 | post             |                  |

请求参数

```javascript
{
    "phoneNum":xxxx    
}
```

请求参数说明：

| 参数名称 | 说明   |
| -------- | ------ |
| phoneNum | 手机号 |

响应参数：

```javascript
{
    "code":1,
     "msg":"短信发送成功"
    "data":{
        "verifyCode":xxx
    }
}
```

响应参数说明：

| 参数名称   | 说明   |
| ---------- | ------ |
| verifyCode | 验证码 |

#### 2.2验证通过，修改手机号

|          |                    | 说明       |
| -------- | ------------------ | ---------- |
| 接口url  | /user/phone/modify | 修改手机号 |
| 请求方式 | post               |            |

请求参数

```javascript
{
    "phoneNum":xxxx    
}
```

请求参数说明：

| 参数名称 | 说明   |
| -------- | ------ |
| phoneNum | 手机号 |

响应参数：

```javascript
{
    "code":1,
     "msg":"修改手机号成功"
}
```

### 3.修改密码

|          |                       | 说明     |
| -------- | --------------------- | -------- |
| 接口url  | /user/password/modify | 修改密码 |
| 请求方式 | post                  |          |

请求参数：

```javascript
{
    "password":xxxx,
    "newPassword":xxx
}
```

请求参数的说明

| 参数名称    | 说明   |
| ----------- | ------ |
| password    | 旧密码 |
| newPassword | 新密码 |

响应参数：

```javascript
{
    "code":1,
     "msg":"修改密码成功"
}
```


# 接口文档

## 首页



### 1.首页的轮播图

|          |                              | 说明                                                         |
| -------- | ---------------------------- | ------------------------------------------------------------ |
| 接口url  | /main/findContents/carousels | 首页的轮播图                                                 |
| 请求方式 | get                          |                                                              |
| 请求参数 |                              |                                                              |
| 响应参数 | {"carousels":carousels}      | carousels:轮播图数组,                                                                        carousels[0].photo:图片的路径 |

### 2.首页的活动精选

|          |                                            | 说明                                                         |
| -------- | ------------------------------------------ | ------------------------------------------------------------ |
| 接口url  | /activities/findAll                        | 首页的活动精选                                               |
| 请求方式 | get                                        |                                                              |
| 请求参数 | pageNum=1                                  | pageNum:当前页                                               |
| 响应参数 | {"activities","[activity1,activity2....]"} | artivities[0].artivityId:活动的id,                                                                  artivities[0].artivityTheme:活动的主题，                                                       artivities[0].artivityCover:活动封面，                                                              artivities[0].artivityCount:浏览次数, |

## 活动详情

|          |                                                              | 说明                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 接口url  | /activities/detail                                           | 首页的活动精选                                               |
| 请求方式 | get                                                          |                                                              |
| 请求参数 | {artivityId:111}                                             | artivityId:活动的id                                          |
| 响应参数 | {"activities","[activity1,activity2....]"，"status":0,"user":user,"} | user.userId:用户id。                                                                                                                       user.userName:用户名字。                                                                                                                 user.userinfo.userinfoPhoto:头像。                                                                                                                           user.fanuserinfo.photosType:关注的状态1：已关注，0表示未关注。                                                                       artivities[0].artivityId:活动的id,                                                                  artivities[0].artivityTheme:活动的主题，                                                       artivities[0].artivityCover:活动封面，                                                              artivities[0].artivityCount:浏览次数,                                         artivities[0].artivityContent:活动内容 ，                                            artivities[0].artivityGuestPhoto:嘉宾的照片，                artivities[0].artivityStartTime：开课时间                              artivities[0].artivityDuration:开课时长                                    artivities[0].artivitySpeaker:主讲人                                         artivities[0].artivityAddress：地址                                                                                         :0未报名，1已报名 |

## 我要报名

|          |                               | 说明                                        |
| -------- | ----------------------------- | ------------------------------------------- |
| 接口url  | /activities/sign              | 我要包名                                    |
| 请求方式 | get                           |                                             |
| 请求参数 | {toUserId:111,activityId:111} | toUserId:活动发布者的id,activityId:活动的id |
| 响应参数 | {code:1,msg:支付成功}         | code:0:报名失败1：报名成功，msg：具体信息   |

## 查询文章



|          |                                        | 说明                                                         |
| -------- | -------------------------------------- | ------------------------------------------------------------ |
| 接口url  | /articles                              | 首页的文章，用户的文章,自己的文章                            |
| 请求方式 | get                                    |                                                              |
| 请求参数 | {userId:111,type:1,pageNum:11}         | pageNum:当前页                                                         ，                                       userId:用户id    （查询用户的文章才需要传id）                                                                                                         type:0:首页的文章，1：用户的文章，2：自己的文章 |
| 响应参数 | {"articles":"[article1,article2....]"} | articles:文章数组，                                                                            articles[0].articleId:文章的id,                                                 articles[0].articleCover:文章的封面，                   articles[0].articleViewCount:观看的次数，                      articles[0].articleTime:发布的时间，                                                  articles[0].articleHeadline:文章标题,                                          articles[0].userName:作者名，                                                                    articles[0].userId:作者的id |





## 查询所有领域：

|          |                                     | 说明                                                         |
| -------- | ----------------------------------- | ------------------------------------------------------------ |
| 接口url  | /domain/findDomains                 | 查询所有领域                                                 |
| 请求方式 | get                                 |                                                              |
| 请求参数 |                                     |                                                              |
| 响应参数 | {"domains":"[domain1,domain2,...]"} | domains:领域数组，                                                                                           domains[0].domainId:领域的id,                                                         domains[1].domainName:领域的名字 |



## 根据领域查询某个领域的所有文章

|          |                                        | 说明                                                         |
| -------- | -------------------------------------- | ------------------------------------------------------------ |
| 接口url  | /domain/findDomains/area               | 查询领域的模块的内容                                         |
| 请求方式 | get                                    |                                                              |
| 请求参数 | {domainId:111，pageNum:11}             | domainId:领域的id,pageNum:当前页                             |
| 响应参数 | {"articles":"[article1,article2....]"} | articles:文章数组，                                                                                                          articles[0].articleId:文章的id,                                                                                       articles[0].articleCover:文章的封面，                                                 articles[0].articleViewCount:观看的次数，                                                                 articles[0].articleTime:发布的时间，                                                  articles[0].articleHeadline:文章标题 |



## 查看文章详情

|          |                                 | 说明                                                         |
| -------- | ------------------------------- | ------------------------------------------------------------ |
| 接口url  | /articles/content               | 文章详情                                                     |
| 请求方式 | get                             |                                                              |
| 请求参数 | articleId=articles[i].id        | articleId:文章的id                                           |
| 响应参数 | {"user":user,"article",article} | user.userId:用户id。                                                                                                                       user.userName:用户名字。                                                                                                                 user.userinfo.userinfoPhoto:头像。                                                                                                                           user.fansType:关注的状态1：已关注，0表示未关注。                 article.articleId:文章的id,article.articleText:文章内容，article.articleHeadline:文章标题，                                                  article.domain.domainName:领域的名字 |

## 相关阅读：

|          |                                        | 说明                                                         |
| -------- | -------------------------------------- | ------------------------------------------------------------ |
| 接口url  | /article/relation                      | 相关阅读                                                     |
| 请求方式 | get                                    |                                                              |
| 请求参数 | {articleId:1111}                       | articleId:文章的id                                           |
| 响应参数 | {"articles":"[article1,article2....]"} | articles:文章数组，                                                                                                          articles[0].articleId:文章的id,                                                                                       articles[0].articleCover:文章的封面，                                                 articles[0].articleViewCount:观看的次数，                                                                 articles[0].articleTime:发布的时间，                                                  articles[0].articleHeadline:文章标题 |



## 热门评论

|          |                             | 说明                                                         |
| -------- | --------------------------- | ------------------------------------------------------------ |
| 接口url  | /comments/hot               | 热门评论（两条）(按点赞)                                     |
| 请求方式 | get                         |                                                              |
| 请求参数 | {id:1111，commentType：1，} | id:文章或者动态的id,commentType:0:文章，1：动态              |
| 响应参数 | {"comments":"commentList"}  | comments[0].user.userId:用户的id，                                comments[0].user.userinfo.userinfoPhoto:头像                                    comments[0].user.username:用户的名字，                          comments[0].commentText:评论的内容，comments[0].commentCount:评论的深度，comments[0].commentTime:评论的时间 |



## 文章或者动态评论

|          |                             | 说明                                                         |
| -------- | --------------------------- | ------------------------------------------------------------ |
| 接口url  | /comments                   | 文章或者动态评论（按时间）                                   |
| 请求方式 | get                         |                                                              |
| 请求参数 | {id:1111，commentType：1，} | id:文章或者动态的id,commentType:0:文章，1：动态              |
| 响应参数 | {"comments":"commentList"}  | comments[0].user.userId:用户的id，                                comments[0].user.userinfo.userinfoPhoto:头像                                    comments[0].user.username:用户的名字，                          comments[0].commentText:评论的内容，                       comments[0].commentId :评论的id                                          comments[0].commentCount:评论的深度，comments[0].commentTime:评论的时间 |

## 查看评论用户的评论



|          |                            | 说明                                                         |
| -------- | -------------------------- | ------------------------------------------------------------ |
| 接口url  | /comments                  | 文章或者动态评论（按时间）                                   |
| 请求方式 | get                        |                                                              |
| 请求参数 | {commentId:1111}           | commentId:评论的id                                           |
| 响应参数 | {"comments":"commentList"} | comments[0].user.userId:用户的id，                                comments[0].user.userinfo.userinfoPhoto:头像                                    comments[0].username:用户的名字，                          comments[0].commentText:评论的内容，                       comments[0].commentCount:评论的深度，                           comments[0].commentId :评论的id                      comments[0].commentTime:评论的时间 |

## 支付

|          |                                              | 说明                                                         |
| -------- | -------------------------------------------- | ------------------------------------------------------------ |
| 接口url  | /pay                                         | 支付                                                         |
| 请求方式 | post                                         |                                                              |
| 请求参数 | {admireMoney:10，articleId:111,toUserId:111} | admireMoney:赞赏的金额，                                                                                                                   articleId:文章的id ,                                                                                                                                                  toUserId:赞赏的用户的id |
| 响应参数 | {code:1,msg:支付成功}                        | code:1：成功 0：失败                                         |

## 评论点赞

|          |                       | 说明               |
| -------- | --------------------- | ------------------ |
| 接口url  | /comments/like        | 评论点赞           |
| 请求方式 | update                |                    |
| 请求参数 | {commentId:1111}      | commentId:评论的id |
| 响应参数 | {code:1,msg:点赞成功} |                    |

## 评论1：用户评论文章

|          |                                                        | 说明                                                         |
| -------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| 接口url  | /discuss/article                                       | 评论文章                                                     |
| 请求方式 | post                                                   |                                                              |
| 请求参数 | {Id:22,toUserId:333,commentText:"xxxx"，commentType:1} | Id:文章的id,                                                                                                   toUserId:文章的作者，                                                                        commentText:评论的内容,                                          commentType:0：文章 ，1：动态 |
| 响应参数 | {code:1,msg:评论成功}                                  |                                                              |

## 评论2：用户评论用户

|          |                                                              | 说明                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 接口url  | /discuss/userComment                                         | 评论用户的评论                                               |
| 请求方式 | post                                                         |                                                              |
| 请求参数 | {commentId:1111，                                                                                                                                  commentText:"xxxx"} | commentId：评论的id,                                                                              commentText:评论的内容 |
| 响应参数 | {code:1,msg:评论成功}                                        |                                                              |

## 文章动态点赞

|          |                         | 说明                                |
| -------- | ----------------------- | ----------------------------------- |
| 接口url  | /articals/content/like  | 评论点赞                            |
| 请求方式 | update                  |                                     |
| 请求参数 | {articalId:1111,type:1} | articalId:文章id,type:1:文章 0:动态 |
| 响应参数 | {code:1,msg:点赞成功}   |                                     |

## 查询历史记录

|          |                          | 说明                                                         |
| -------- | ------------------------ | ------------------------------------------------------------ |
| 接口url  | /search/history          | 查询用户的历史记录                                           |
| 请求方式 | get                      | 查询                                                         |
| 请求参数 |                          |                                                              |
| 响应参数 | {"historys":historyList} | history[0].userId:用户名的id,history[0].historyText:历史记录的内容 |

## 删除历史记录

|          |                             | 说明                    |
| -------- | --------------------------- | ----------------------- |
| 接口url  | /search/history             | 删除用户的历史记录      |
| 请求方式 | delete                      | 删除                    |
| 请求参数 |                             |                         |
| 响应参数 | {"code":1,"msg":"删除成功"} | 1：删除成功 0：删除失败 |

## 收藏

### 选择收藏

|          |                                      | 说明                                                         |
| -------- | ------------------------------------ | ------------------------------------------------------------ |
| 接口url  | /favorites/findFavorites             | 查询收藏夹                                                   |
| 请求方式 | get                                  | 查询                                                         |
| 请求参数 |                                      |                                                              |
| 响应参数 | {favorites:[favorite1,favorite2...]} | favorutes:收藏夹数组，                                                                         favorites[i].favoriteId:文件夹的id                                                                                    favorites[i].favoriteName:文件夹的名字，                                          favorites[i].favoriteStatus:收藏夹的状态，                                      favorites[i].favoriteCount:收藏的数目，                                  favorites[i].favouritesPhoto:封面 |

### 确定收藏

|          |                                 | 说明                                   |
| -------- | ------------------------------- | -------------------------------------- |
| 接口url  | /favorites/confirm              | 确定收藏的收藏夹                       |
| 请求方式 | post                            |                                        |
| 请求参数 | {favoritesId:111,articleId:111} | favoritesId:文件夹id,articleId文章的id |
| 响应参数 | {"code":1,"msg":"收藏成功"}     |                                        |

### 删除文件夹

|          |                             | 说明                  |
| -------- | --------------------------- | --------------------- |
| 接口url  | /favorites/delete           | 确定收藏的收藏夹      |
| 请求方式 | delete                      |                       |
| 请求参数 | {favoritesId:111}           | favoritesId:文件夹id, |
| 响应参数 | {"code":1,"msg":"删除成功"} |                       |

### 创建和编辑文件夹

|          |                                                              | 说明                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 接口url  | /favorites/creat                                             | 创建收藏夹                                                   |
| 请求方式 | put                                                          |                                                              |
| 请求参数 | {favoriteId:111，favoriteName:"xx",favoriteDescribe:"xxx",favoriteStatus:xxx，favoritePhoto:"src"} | favoritesId:文件夹id,                                          favoriteName:文件夹的名字，favoriteDescribe：文件夹的描述，favoriteStatus：文件夹的状态,favoritePhoto:文件夹的封面 ，如果是创建，不需要传文件夹的id。 |
| 响应参数 | {"code":1,"msg":"操作成功"}                                  |                                                              |

## 搜索内容

|          |                                                              | 说明                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 接口url  | /search/content                                              | 查询领域的模块的内容                                         |
| 请求方式 | get                                                          |                                                              |
| 请求参数 | keyword="ugd"                                                | keyword:关键字                                               |
| 响应参数 | {"users":"[user1,user2....]","articles":"[article1,article2]"} | users:用户数组。                                                                                                                   user[0].userId:用户id。                                                                                                  user[0].userName:用户名字。                                                               user[0].userinfo.userinfoPhoto:头像。                                                                                        user[0].fansType:关注的状态1：已关注，0表示未关注。                articles[0]. articleId:文章的id,                                                                                                               articles[0]. articleHeadline:文章标题                                                                      articles[0]. articleTime:发布时间 |

## 动态

### 查询动态

|          |                              | 说明                                                         |
| -------- | ---------------------------- | ------------------------------------------------------------ |
| 接口url  | /dynamic/content             | 动态                                                         |
| 请求方式 | get                          |                                                              |
| 请求参数 | {type=1,pageNum=2}           | type=0：查询自己的动态，1:关注的用户的动态，2：热门。                    pageNum:当前页 |
| 响应参数 | {"dynamicList":daynamicList} | dynamicList[0].user.userId:用户id。                                                          dynamicList[0].user.userName:用户名字。                                                               dynamicList[0].user.userinfo.uesrinfoPhoto:头像。                                                dynamicList[0].fansType:关注的状态1：已关注，0表示未关注。dynamicList[0].dynamics[0].dynamicTime:发表时间，dynamicList[0].dynamics[0].dynamicId:新闻的id,dynamicList[0].dynamics[0].dynamicText:新闻内容，dynamicList[0].dynamics[0].dynamicLikeCount:点赞次数，dynamicList[0].commentCount:评论次数，dynamicList[0].shareCount:分享次数 |

### 

### 发表动态

|          |                             | 说明                        |
| -------- | --------------------------- | --------------------------- |
| 接口url  | /dynamic/insert             | 发布动态                    |
| 请求方式 | post                        |                             |
| 请求参数 | {dynamicText:"xxx"}         | dynamicText:发表动态的内容, |
| 响应参数 | {"code":1,"msg":"发布成功"} |                             |

### 转发动态

|          |                                 | 说明                                           |
| -------- | ------------------------------- | ---------------------------------------------- |
| 接口url  | /dynamic/forwardarticle         | 发布动态                                       |
| 请求方式 | post                            |                                                |
| 请求参数 | {shareText:"xxx",dynamicId:222} | dynamicId:转发的文章的id,shareText转发的内容： |
| 响应参数 | {"code":1,"msg":"转发成功"}     |                                                |

## 个人主页



### 个人主页-上面资料

|          |                                                              | 说明                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 接口url  | /homePage/information                                        | 个人资料                                                     |
| 请求方式 | get                                                          |                                                              |
| 请求参数 | {userId:11}                                                  | userId:用户id                                                |
| 响应参数 | {"user":user，"likeCount":123,favoriateCount:111，fansCount:111，attentionCount:111，fanstype:0} | user.userId:用户id,                                                         user.userName:用户名字，                                             user.userinfo.userinfoPhoto:个人头像，                    user.userinfo.userinfoSex:性别，                                user.userinfo.userinfoWeixin:微博。                                                                     likeCount:收藏的次数，                                         favoriateCount:收藏的次数。                                        fansCount:粉丝的数目。                                                         attentionCount:关注的次数。                                      fansType:关注的状态（0：未关注，1：关注）。 |

### 查看我的关注（自己只能看自己的）



|          |                         | 说明                                                         |
| -------- | ----------------------- | ------------------------------------------------------------ |
| 接口url  | /user/attention         | 查看关注粉丝                                                 |
| 请求方式 | get                     |                                                              |
| 请求参数 | {type:1}                | type:1:查看我的关注，2：查看我的粉丝                         |
| 响应参数 | {"userList":"userList"} | userList[0].userId:用户的id,                                                                                            userList[0].userName:用户的名字，                                                               userList[0].userinfo.userinfoSignature:用户的签名，userList[0].userinfo.userinfoPhoto:头像，                                                                 userList[0].fansType:关注的状态，0：没关注，1：关注（fansType实体类的属性） |

### 作者主页：

#### 关注，拉黑，取消关注作者

|          |                              | 说明                                                 |
| -------- | ---------------------------- | ---------------------------------------------------- |
| 接口url  | /author/attention            | 关注用户                                             |
| 请求方式 | get                          |                                                      |
| 请求参数 | {toUserId:"3333",fansType:1} | toUserId:作者id,fansType:0:取消关注，1关注，2:拉黑， |
| 响应参数 | {"code":"1",msg:"关注成功"}  | code: 1:关注成功，0：关注失败，msg:关注的情况        |

#### 发起举报

|          |                             | 说明                                                         |
| -------- | --------------------------- | ------------------------------------------------------------ |
| 接口url  | /report                     | 发起举报                                                     |
| 请求方式 | get                         |                                                              |
| 请求参数 |                             |                                                              |
| 响应参数 | {"reportTypes",reportTypes} | reportTypes[0].reportTypeId:举报的类型的id。reportTypes[0].reportTypeName:举报的类型 |



#### 举报文章，动态，作者

|          |                                                 | 说明                                                         |
| -------- | ----------------------------------------------- | :----------------------------------------------------------- |
| 接口url  | /report/certainReport                           | 确定举报用户                                                 |
| 请求方式 | get                                             |                                                              |
| 请求参数 | {reportById:"3333",reportType:1,reportTypeId:1} | reportById:文章，动态，作者的id。reportType:0:文章，1：动态，2：作者。reportTypeId:举报的类型的id。 |
| 响应参数 | {"code":"1",msg:"举报成功"}                     | code: 1:举报成功，0：举报失败。msg:举报的情况                |



### 个人主页-动态

和查询动态一样

### 个人主页-文章

|          |                        | 说明                                                         |
| -------- | ---------------------- | ------------------------------------------------------------ |
| 接口url  | /homePage/article      | 文章                                                         |
| 请求方式 | get                    |                                                              |
| 请求参数 | {userId:11，pageNum=1} | userId:用户id，pageNum:当前页                                |
| 响应参数 | {articles:article}     | articles:文章数组，                                                                                                                    articles[0].articleId:文章的id,                                                                                                articles[0].articleCover:文章的封面，                                                                                                         articles[0].articleViewCount:观看的次数，                                                                articles[0].articleTime:发布的时间，                                                  articles[0].articleHeadline:文章标题,                                                                             articles[0].userName:作者名，                                                                                                   articles[0].userId:作者的id |

### 个人主页-资料 

|          |                        | 说明                                                         |
| -------- | ---------------------- | ------------------------------------------------------------ |
| 接口url  | /homePage/info         | 个人主页-资料                                                |
| 请求方式 | get                    |                                                              |
| 请求参数 | {userId:11，pageNum=1} | userId:用户id，pageNum:当前页                                |
| 响应参数 | {"userInfo":userInfo}  | userInfo.provinceName:所属省份，                                                                                userInfo.cityName:城市，                                                                                               userInfo.userinfoSignature：签名，userInfo.userinfoQq:QQ,userInfo.userinfoWeibo:微博，   userInfo.userinfoWeixin:微信，                                                         userInfo.domain[0].domainId:关注领域的id ,                  userInfo.domain[0].domainName: 领域的名字 |







## 1.登录

|          |                             | 说明 |
| -------- | --------------------------- | ---- |
| 接口url  | /user/doLogin               | 登录 |
| 请求方式 | post                        |      |
| 请求参数 |                             |      |
| 响应参数 | {"code":1,"msg":"密码错误"} |      |






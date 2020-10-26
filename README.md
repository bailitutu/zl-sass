### 通用sass公共样式库


        一、默认重置及预设的样式 -- reset.css
            如：统一采用border-box,免去减法计算：

                *{
                    box-sizing: border-box;
                }

        二、整体采用提取首个字母,以 '-'连接的形式进行命名 前缀为 'r-',
            例如：
                .g-ta-c {
                    text-align: center;
                }

        三、部分特殊样式额外命名，方便记忆
            例如：
                .g-pointer {
                    cursor: pointer;
                }

#### 常用字体大小
    支持的值有：
        12, 13, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 40
###### 举例：

|  class |  关键代码 |
|  :---- | :---- |
| .g-fs-12 | font-size: 12px; |
| .g-fs-16 | font-size: 16px; |


#### Font-Weight

|  class |  关键代码 |
|  :---- | :---- |
| .g-fw-400 | font-weight: 400; |
| .g-fw-500 | font-weight: 500; |
| .g-fw-600 | font-weight: 600; |
| .g-fw-700 | font-weight: 700; |
| .g-bold | font-weight: bold; |

#### 常用行高
    支持的值有：
        14, 16, 18, 20, 24, 26, 28, 30, 32, 36, 40, 48, 56

###### 举例：

|  class |  关键代码 |
|  :---- | :---- |
| .g-lh-16 | line-height: 16px; |
| .g-lh-24 | line-height: 24px; |


####  常用色值

|  class |  关键代码  |
|  :---- | :---- |
| .g-c-white | color: white; |
| .g-c-black | color: black; |
| .g-c-primary | color: #0089fa; |
| .g-c-success | color: #67c23a; |
| .g-c-warning | color: #ff9900; |
| .g-c-error | color: #e63e35; |
| .g-c-gray | color: #909399; |
| .g-c-000 | color: #000; |
| .g-c-ccc | color: #ccc; |
| .g-c-333 | color: #333; |
| .g-c-666 | color: #666; |
| .g-c-999 | color: #999; |
| .g-c-f1 | color: #f1f1f1; |
| .g-c-f2 | color: #f2f2f2; |
| .g-c-f5 | color: #f5f5f5; |

####  常用背景色值

|  class |  关键代码  |
|  :---- | :---- |
| .g-bg-white | background-color: white; |
| .g-bg-black | background-color: black; |
| .g-bg-primary | background-color: #0089fa; |
| .g-bg-success | background-color: #67c23a; |
| .g-bg-warning | background-color: #ff9900; |
| .g-bg-error | background-color: #e63e35; |
| .g-bg-gray | background-color: #909399; |
| .g-bg-000 | background-color: #000; |
| .g-bg-ccc | background-color: #ccc; |
| .g-bg-333 | background-color: #333; |
| .g-bg-666 | background-color: #666; |
| .g-bg-999 | background-color: #999; |
| .g-bg-f1 | background-color: #f1f1f1; |
| .g-bg-f2 | background-color: #f2f2f2; |
| .g-bg-f5 | background-color: #f5f5f5; |

#### Margin 值
    支持的值有：
        2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40, 48

###### 举例：
|  class |  关键代码  |
|  :---- | :---- |
| .g-m-12 | margin: 12px; |
| .g-mt-12 | margin-top: 12px; |
| .g-mr-12 | margin-right: 12px; |
| .g-mb-12 | margin-bottom: 12px; |
| .g-ml-12 | margin-left: 12px; |


#### Padding 值
    支持的值有：
        2, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 40, 48

###### 举例：
|  class |  关键代码  |
|  :---- | :---- |
| .g-pd-12 | padding: 12px; |
| .g-pt-12 | padding-top: 12px; |
| .g-pr-12 | padding-right: 12px; |
| .g-pb-12 | padding-bottom: 12px; |
| .g-pl-12 | padding-left: 12px; |


#### 圆角
    支持的值有：
        2, 4, 6, 8, 10, 12, 16

###### 举例：
|  class |  关键代码  |
|  :---- | :---- |
| .g-br-4 | border-radius: 4px; |
| .g-br-8 | border-radius: 8px; |
| .g-cicle | border-radius: 50%; |

#### 其他常用值：

|  class |  备注  |
|  :---- | :---- |
| .g-w-full | width: 100%; |
| .g-h-full | height: 100%; |
| .g-ta-l | text-align: left; |
| .g-ta-c | text-align: center; |
| .g-ta-r | text-align: right; |
| .g-f-l | float: left; |
| .g-f-r | float: right; |
| .g-show | display: block; |
| .g-block | display: block; |
| .g-hide | display: none; |
| .g-of-h | overflow: hidden; |
| .g-hidden | overflow: hidden; |
| .g-fixed | position: fixed; |
| .g-relative | position: relative; |
| .g-absolute | position: absolute; |
| .g-pointer | cursor: pointer; |
| .g-no-select | user-select: none; |
| .g-oneline | 单行+省略号 |
| .g-twoline | 两行+省略号 |

####  Flex 布局

|  class |  关键代码  |
|  :---- |  :----  |
| .g-flex | display: flex; |
| .g-full | flex: 0 0 100%; |
| .g-fd-c | flex-direction: column; |
| .g-fd-cr |  flex-direction: column-reverse; |
| .g-fd-r |  flex-direction: row; |
| .g-fd-rr | flex-direction: row-reverse; |
| .g-fw-w | flex-wrap: wrap; |
| .g-fw-n | flex-wrap: nowrap; |
| .g-fw-wr | flex-wrap: wrap-reverse; |
| .g-jc-fs | justify-content: flex-start; |
| .g-jc-fe | justify-content: flex-end; |
| .g-jc-c | justify-content: center; |
| .g-jc-sb | justify-content: space-between; |
| .g-jc-sa | justify-content: space-around; |
| .g-ai-fs | align-items: flex-start; |
| .g-ai-fe | align-items: flex-end; |
| .g-ai-c | align-items: center; |
| .g-ai-b | align-items: baseline; |
| .g-ai-s | align-items: stretch; |
| .g-ac-fs | align-content: flex-start; |
| .g-ac-fe | align-content: flex-end; |
| .g-ac-c | align-content: center; |
| .g-ac-sb | align-content: space-between; |
| .g-ac-sa | align-content: space-around; |
| .g-ac-s | align-content: stretch; |
| .g-as-a | align-self: auto; |
| .g-as-fs | align-self: flex-start; |
| .g-as-fe | align-self: flex-end; |
| .g-as-c | align-self: center; |
| .g-as-b | align-self: baseline; |
| .g-as-s | align-self: stretch; |
| .g-flex-1 | flex: 1; |
| .g-flex-2 | flex: 2; |
| .g-flex-3 | flex: 3; |
| .g-1of2 | flex: 0 0 50%; |
| .g-1of3 | flex: 0 0 33.33333333%; |
| .g-2of3 | flex: 0 0 66.66666666%; |
| .g-1of4 | flex: 0 0 25%; |
| .g-3of4 | flex: 0 0 75%; |
| .g-1of5 | flex: 0 0 20%; |
| .g-2of5 | flex: 0 0 40%; |
| .g-3of5 | flex: 0 0 60%; |
| .g-4of5 | flex: 0 0 80%; |




#### 正方形、圆形图片：
    支持的大小有： 30, 32, 40, 48, 56, 64, 78

|  class |  备注  |
|  :---- | :---- |
| .g-img-48 | width: 48px;height: 48px; |
| .g-imgc-48 | width: 48px;height: 48px;border-radius: 50%; |

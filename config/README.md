# Used items selling website

* Shan Jiang
* Yongchang Yao
* Hangbo Li
* Chang Cui
* Chi Luo

## Users

The user collection will store all users and the items they are selling or have sold.

```
{
	"uid":"cluo",
	"hashedPassword":"$2a$08$XdvNkfdNIL8Fq7l8xsuIUeSbNOFgK0M0iV5HOskfVn7.PWncShU.O",
	"email":"cluo@gamil.com",
	"itemList":[
		{
			"iid":"item1"
		},
		{
			"iid":"item2"
		}
	]
}
```

| Name | Type | Description |
|------|------|-------------|
| uid  | string | A globally unique identifier to represent an user |
| hashedPassword | string | A bcrypted string that is a hashed version of the user's password |
| email | string | The email address of the user |
| itemList | array of items | The items that the user is selling or has sold | 
| msgList | array of mid | List of message id |

## Item List (subdocument; not stored in a collection)

This subdocument is used to stroe the items that post by an user.

```
{
	"itemList": [
		"iid":"item1",
		"iid":"item2"
	]
}

```

| Name | Type | Description |
|------|------|-------------|
| iid  | string | Item id |


## Items

The item collection will stroe all the items and any information related to them
```
{
	"iid":"itemid1",
	"title":"ipad mini",
	"description":"simple description",
	"condition":"used good",
	"originalPrice":499.00,
	"currentPrice":100.00,
	"tags": [
		"electronic",
		"apple"
	]
}

```

| Name | Type | Description |
|------|------|-------------|
| iid  | string | A globally unique identifier to represent an item | 
| title  | string | A short title of the item |
| description  | string | Detailed description for the item |
| condition  | string | Condition of the item (may include: brand new, used - good, used - acceptable, or others) |
| originalPrice  | number | The original listed price |
| currentPrice  | number | The current selling price |
| tag  | string | A single tag for the item |
| pic  | array of string | File paths of images |



## Orders

The information of an order, and its comments by the seller and buyer.

```
{
	"oid":"orderid1",
	"buyerid":"ccui",
	"sellerid":"cluo",
	"itemid":"itemid1",
	"status":"processing",
	"buyerComment":"",
	"sellerComment":""
	
}
```
| Name | Type | Description |
|------|------|-------------|
| oid  | string | A globally unique identifier to represent an order | 
| buyerid | string | The uid of the buyer |
| sellerid | string | The uid of the seller |
| itemid | string | The iid of the item  |
| status | string | The current status of this order (coubld be: processing, canceled, completed) | 
| buyerComment | string | The comments leave by the buyer, to the seller  | 
| sellerComment | string | The comments leave by the seller, to the buyer | 


## Messages

The messages sent by all users.

```
{
	"mid":"messageid1",
	"from":"ccui",
	"to":"cluo",
	"content":"hello! I would like to buy your ipad mini."
	"isRead": true
	
}
```
| Name | Type | Description |
|------|------|-------------|
| mid  | string | A globally unique identifier to represent a message | 
| fromid | string | The uid of the sender |
| toid | string | The uid of the receiver |
| content | string | The actual content of a message   |
| isRead | boolean | A boolean value to state wheter the receiver has opened the message  | 


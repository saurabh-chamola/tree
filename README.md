
TASK: CREATE TREE-BASED CATEGORY APIs (POST AND GET ONLY)

------------------------------------------------------------------------------------------------------------------------
I have created a tree-based category API. First I will create a root category, and the next time I want to add a category, I can associate it as a child category with the previous parent category.

Step 1
Firstly, I created a POST API that allows me to create a new category or parent category with the name 'Bollywood Movies.' After saving it, MongoDB generates a unique ID for this document, which is 67045499da4757fa73276163.

POSTMAN CURL:

Step 2
Now, if we want to add any child categories to a parent document, we can simply pass the child category we want along with the ID of the parent category. For example, if I want to add the 'Action Movies' child category inside 'Bollywood Movies,' the parentCategory will be 'Bollywood Movies,' and I will pass the ID 67045499da4757fa73276163. We can add multiple child nodes or child categories like this.

POSTMAN CURL:

Now, we can view the nested tree structure of our categories. In the current example, we have a root category, which is 'Bollywood Movies,' and two child categories: 'Horror Movies' and 'Action Movies.'

POSTMAN CURL:
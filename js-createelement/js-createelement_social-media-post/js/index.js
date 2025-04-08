console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// 1. create container
const newPost = document.createElement("article");
newPost.classList.add("post");

// 2. append the container on the end of body
document.body.append(newPost);

// 3. create text
const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

// 4. append text
newPost.append(postContent);

// 5. create foote
const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

// 6. append footer
newPost.append(postFooter);

// 7. username
const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";

// 8. append username
postFooter.append(postUsername);

// 9. create liek button
const postLikeButton = document.createElement("button");
postLikeButton.type = "button";
postLikeButton.classList.add("post__button");
postLikeButton.setAttribute("data-js", "like-button");

// 10. set text for the like button
postLikeButton.textContent = "♥ Like";

// 11. add event listner to the button and assign the handle function
postLikeButton.addEventListener("click", handleLikeButtonClick);

// 12. add like button to the footer
postFooter.append(postLikeButton);

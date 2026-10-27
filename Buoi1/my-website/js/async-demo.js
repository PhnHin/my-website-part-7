function loginPromise(username, password) {
    return new Promise((resolve, reject) => {
    console.log("Đang kiểm tra thông tin đăng nhập...");

    setTimeout(() => {
        if (username === "Luu" && password === "H7907") {
            resolve("Đăng nhập thành công!");
        } else {
            reject("Sai tên đăng nhập hoặc mật khẩu!");
        }
    }, 2000);
    });
}
function getUserPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "Nguyễn Văn A"
            });
        }, 1000);
    });
}
function getOrdersPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                "Laptop",
                "Chuột",
                "Bàn phím"
            ]);
        }, 1000);
    });
}

async function displayUsers() {
    const usersList = document.querySelector("#users-list");
    const usersStatus = document.querySelector("#users-status");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`API phản hồi lỗi (${response.status}).`);
        }

        const users = await response.json();
        if (!Array.isArray(users)) {
            throw new Error("Dữ liệu người dùng không hợp lệ.");
        }

        usersList.replaceChildren();
        for (const user of users) {
            const item = document.createElement("li");
            item.textContent = `${user.name} - ${user.email}`;
            usersList.append(item);
        }
        usersStatus.textContent = users.length
            ? ""
            : "Hiện chưa có người dùng nào.";
    } catch (error) {
        console.error("Không thể tải danh sách người dùng:", error);
        usersStatus.textContent =
            "Không thể tải danh sách người dùng. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.";
    }
}

const postForm = document.querySelector("#post-form");
postForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const postStatus = document.querySelector("#post-status");
    const createdPost = document.querySelector("#created-post");
    const submitButton = postForm.querySelector('button[type="submit"]');
    const formData = new FormData(postForm);

    postStatus.textContent = "Đang gửi bài viết...";
    createdPost.replaceChildren();
    submitButton.disabled = true;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                title: formData.get("title"),
                body: formData.get("body"),
                userId: 1,
            }),
        });

        if (!response.ok) {
            throw new Error(`API phản hồi lỗi (${response.status}).`);
        }

        const post = await response.json();
        if (!post || typeof post !== "object" || post.id === undefined) {
            throw new Error("Dữ liệu bài viết trả về không hợp lệ.");
        }

        const postTitle = document.createElement("h4");
        postTitle.textContent = post.title;
        const postBody = document.createElement("p");
        postBody.textContent = post.body;
        const postId = document.createElement("p");
        postId.textContent = `Mã bài viết: ${post.id}`;

        createdPost.append(postTitle, postBody, postId);
        postStatus.textContent = "Tạo bài viết thành công!";
        postForm.reset();
    } catch (error) {
        console.error("Không thể tạo bài viết:", error);
        postStatus.textContent =
            "Không thể gửi bài viết. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.";
    } finally {
        submitButton.disabled = false;
    }
});

displayUsers();

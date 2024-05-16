<template>
    <NavBar />
    <the-loader v-if="showLoading"></the-loader>
    <div class="contrainer">
        <div class="row">
            <div class="col-md-12">
                <div>
                    <router-view></router-view>
                    <!-- <div>{{ accessToken }}</div>
                    <hr>
                    <div>{{ UsersData }}</div>
                    <hr>
                    <div>{{ BooksData }}</div>
                    <hr>
                    <div>{{ BookIdData }}</div> -->
                    <!-- <div>{{ Users }}</div>
                    <hr> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // name: 'UserPage',
    data() {
        return {
            GetUsers: null,
            GetUserId: null,
            PutUserId: null,
            DeleteUserId: null,
        };
    },
    methods: {
        async getAllUsers() {
            console.log(process.env.VUE_APP_API_URL);
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/users`, {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    return "error";
                }
                const data = await response.json();
                console.log(data);
                this.GetUsers = data;
            } catch (error) {
                return "catch";
            }
        },
        async getUserById() {
            console.log(process.env.VUE_APP_API_URL);
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/users/{id}`, {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    return "error";
                }
                const data = await response.json();
                console.log(data);
                this.GetUserId = data;
            } catch (error) {
                return "catch";
            }
        },
        async putUserById() {
            console.log(process.env.VUE_APP_API_URL);
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/users/{id}`, {
                    method: "PUT",
                    headers: {
                        'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    return "error";
                }
                const data = await response.json();
                console.log(data);
                this.PutUserId = data;
            } catch (error) {
                return "catch";
            }
        },
        async deleteUserById() {
            console.log(process.env.VUE_APP_API_URL);
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/v1/users/{id}`, {
                    method: "DELETE",
                    headers: {
                        'Authorization': `Bearer ${this.accessToken}`,  // Add your token here
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    return "error";
                }
                const data = await response.json();
                console.log(data);
                this.DeleteUserId = data;
            } catch (error) {
                return "catch";
            }
        },
    },
    created() {
        this.getAllUsers()
        this.getUserById()
        this.putUserById()
        this.deleteUserById()
    }
}
</script>
 
 
<style scoped>

</style>

<template>
    <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=832" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="user.id">
                <b-card-text >
                    
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "UserItem",
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>
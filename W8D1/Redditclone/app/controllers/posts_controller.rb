class PostsController < ApplicationController

    before_action :require_logged_in, only: []

    

    def edit

    end

    private

    def post_params
        params.require(:post).permit(:title, :content, sub_ids: [])
    end 

end

# Update the PostsController#post_params to accept an array of sub_ids


# class PostsController < ApplicationController
#   def create
#     @post = Post.new(post_params)

#     if @post.save
#       redirect_to post_url(@post)
#     else
#       render :new
#     end
#   end

#   # ...

#   private

#   def post_params
#     params.require(:post).permit(:text, tag_ids: [])
#   end
# end
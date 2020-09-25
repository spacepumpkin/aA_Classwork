class FollowsController < ApplicationController
  before_action :require_logged_in!

  def create
    # simulate latency
    sleep(1)
    
    @follow = current_user.out_follows.create!(followee_id: params[:user_id])
    
    # debugger
    respond_to do |format|
      format.json { render json: @follow }
      format.html { redirect_to request.referrer }
    end
  end

  def destroy
    # simulate latency
    sleep(1)
    
    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
    # debugger
    @follow.destroy!

    respond_to do |format|
      # debugger
      format.json { render json: @follow }
      format.html { redirect_to request.referrer }
    end
  end
end

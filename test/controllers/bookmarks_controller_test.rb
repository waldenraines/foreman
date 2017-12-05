require 'test_helper'

class BookmarksControllerTest < ActionController::TestCase
  setup do
    @factory_options = [{:controller => "users"}]
  end

  basic_pagination_per_page_test
  basic_pagination_rendered_test

  test "should get index" do
    get :index, {}, set_session_user
    assert_response :success
    assert_not_nil assigns(:bookmarks)
  end

  test "should get edit" do
    get :edit, {:id => bookmarks(:one).to_param}, set_session_user
    assert_response :success
  end

  test "should update bookmark" do
    put :update, {:id => bookmarks(:one).to_param, :bookmark => { :name => 'bar' }}, set_session_user
    assert_redirected_to bookmarks_path
  end

  test "should destroy bookmark" do
    assert_difference('Bookmark.count', -1) do
      delete :destroy, {:id => bookmarks(:one).to_param}, set_session_user
    end
    assert_redirected_to bookmarks_path
  end

  test "should only show public and user's bookmarks" do
    get :index, {}, set_session_user
    assert_response :success
    assert_includes assigns(:bookmarks), bookmarks(:one)
    refute_includes assigns(:bookmarks), bookmarks(:two)
  end

  test "should not allow actions on non public/non user bookmarks" do
    put :update, {:id => bookmarks(:two).to_param, :bookmark => { :name => 'bar' }}, set_session_user
    assert_response 404

    get :edit, {:id => bookmarks(:two).to_param}, set_session_user
    assert_response 404
  end

  test "should search by name" do
    get :index, { :search => "name=\"foo\"" }, set_session_user
    assert_response :success
    refute_empty assigns(:bookmarks)
    assert assigns(:bookmarks).include?(bookmarks(:one))
  end

  test "should search by controller" do
    get :index, { :search => "controller=hosts" }, set_session_user
    assert_response :success
    refute_empty assigns(:bookmarks)
    assert assigns(:bookmarks).include?(bookmarks(:one))
  end
end

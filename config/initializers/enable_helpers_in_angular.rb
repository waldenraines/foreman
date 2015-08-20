Rails.application.assets.context_class.class_eval do
  include ApplicationHelper
  include LayoutHelper
  include ActionView::Helpers
  include Rails.application.routes.url_helpers

  attr_accessor :output_buffer
end
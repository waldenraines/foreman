require 'test_helper'
require 'foreman/cast'

class UtilTest < ActiveSupport::TestCase
  include Foreman::Cast

  test "should convert strings to booleans" do
    true_strings = %w('true', 't', 'yes', 'y', '1')
    false_strings = %w('false', 'f', 'no', 'n', '0')

    true_strings.each do |true_string|
      assert_equal true, to_bool(true_string)
    end

    false_strings.each do |false_string|
      assert_equal false, to_bool(false_string)
    end
  end

  test "should convert FixNums to booleans" do
    assert_equal true, to_bool(1)
    assert_equal false, to_bool(0)
  end

  test "should convert Nil to boolean" do
    assert_equal false, to_bool(nil)
  end

  test "should otherwise simply return the provided value" do
    assert_equal Object, to_bool(Object)
  end
end


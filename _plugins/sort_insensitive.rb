# Jekyll case insensitive sort filter
# from: https://github.com/tkrotoff/osteo15.com/commit/c7a25082b5d4c83c4d6c75db3ede3395c0277b80

module Jekyll
  module SortInsensitiveFilter
    # Sort a hash using String#casecmp the case-insensitive version of String#<=>
    # By default, Enumerable#sort uses <=>
    def sort_insensitive(input, attr)
      input.sort { |apple, orange| apple[attr].casecmp(orange[attr]) }
    end
  end
end

Liquid::Template.register_filter(Jekyll::SortInsensitiveFilter)

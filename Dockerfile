FROM ruby:2.6.6-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --update build-base git
RUN gem update bundler
COPY Gemfile /usr/src/app/
COPY Gemfile.lock /usr/src/app/
RUN bundle install

CMD LC_ALL="en_US.UTF-8" \
    JEKYLL_ENV=production bundle exec jekyll serve \
      --watch \
      --incremental \
      --host 0.0.0.0  \
      --trace \
      --baseurl /site \

# frozen_string_literal: true

require 'todo_agent'

TodoAgent::Commands::Analyze.new(".", []).execute
File.foreach("todo_agent.log") { |line| puts line }

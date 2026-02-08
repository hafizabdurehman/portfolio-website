---
title: ROS 2 Laboratory Exercises
sidebar_label: ROS 2 Labs
sidebar_position: 1
description: Laboratory exercises for ROS 2 concepts and implementation
---

# ROS 2 Laboratory Exercises

This section contains laboratory exercises for implementing and understanding ROS 2 concepts in the context of humanoid robotics.

## Lab Exercise 1: Creating Your First ROS 2 Node

### Objectives
- Understand the basic structure of a ROS 2 node
- Create a simple publisher and subscriber
- Learn how to build and run ROS 2 packages

### Prerequisites
- ROS 2 installation (Humble Hawksbill or later)
- Basic knowledge of C++ or Python

### Instructions
1. Create a new ROS 2 package using `ros2 pkg create`
2. Implement a publisher node that publishes simple messages
3. Implement a subscriber node that receives and processes messages
4. Build the package using `colcon build`
5. Run both nodes and verify communication

### Expected Outcome
Two nodes communicating via a topic with proper message passing.

## Lab Exercise 2: URDF Robot Modeling

### Objectives
- Create a URDF file for a simple robot
- Visualize the robot in RViz
- Understand joint and link definitions

### Prerequisites
- Basic understanding of robot kinematics
- RViz installation

### Instructions
1. Define a simple robot with 2-3 links and joints
2. Add visual and collision properties
3. Launch RViz and visualize the robot
4. Test joint movement in simulation

### Expected Outcome
Robot model displayed in RViz with proper joint visualization.

## Lab Exercise 3: ros2_control Implementation

### Objectives
- Implement a simple ros2_control configuration
- Create hardware interface for a simulated robot
- Control robot joints through ROS 2

### Prerequisites
- Understanding of URDF
- Basic ros2_control concepts

### Instructions
1. Create ros2_control configuration files
2. Implement hardware interface plugin
3. Configure controller manager
4. Test joint control through ROS 2

### Expected Outcome
Robot joints controllable through ROS 2 control interfaces.

## Troubleshooting

- **Package not found**: Ensure you've sourced your ROS 2 installation and built the package
- **Topic not connecting**: Check that nodes are on the same network and namespace
- **RViz not displaying robot**: Verify URDF path and robot_description parameter

## References

1. ROS 2 Documentation. (2023). "Creating Your First ROS 2 Package." ROS.org.
2. ROS 2 Control Documentation. (2023). "ros2_control User Guide." ROS.org.